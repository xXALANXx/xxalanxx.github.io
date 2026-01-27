/**
 * Renders the project grid on the homepage using inlined PROJECTS_DATA (works without a server).
 */

(function () {
  const grid = document.getElementById("project-grid");
  const projects = window.PROJECTS_DATA;
  if (!grid || !Array.isArray(projects)) return;

  grid.innerHTML = projects
    .map((p) => {
      const thumb = p.thumbnail || (p.images && p.images[0]) || "";
      const thumbSrc = thumb ? encodeURI(thumb) : "";
      const imgEl = thumb
        ? `<img src="${escapeAttr(thumbSrc)}" alt="" loading="lazy" onerror="this.parentElement.classList.add('placeholder'); this.remove(); this.nextElementSibling.style.display='block';" /><span style="display:none">Project image</span>`
        : '<span>Project image</span>';
      const placeholder = !thumb ? " placeholder" : "";
      const tags = p.tags || [];
      const oneSet = tags.map((t) => `<span class="skill-pill">${escapeHtml(t)}</span>`).join("");
      const carouselHtml = tags.length
        ? `<div class="skills-carousel-wrap"><div class="skills-carousel"><div class="skills-carousel-set">${oneSet}</div><div class="skills-carousel-set">${oneSet}</div></div></div>`
        : "";
      return `
      <a href="project.html?id=${escapeAttr(p.id)}" class="project-card">
        <div class="project-card-image${placeholder}">${imgEl}</div>
        <div class="project-card-body">
          <h3 class="project-card-title">${escapeHtml(p.title)}</h3>
          <p class="project-card-desc">${escapeHtml(p.shortDesc || "")}</p>
          ${carouselHtml}
        </div>
      </a>`;
    })
    .join("");

  /** JS-driven infinite scroll; ensure track is wide enough so short carousels never show a gap. */
  const pxPerSecond = 27;
  const carousels = [];
  
  // Wait for layout to settle before measuring
  function initCarousels() {
    grid.querySelectorAll(".skills-carousel-wrap").forEach((wrap) => {
      const track = wrap.querySelector(".skills-carousel");
      const firstSet = wrap.querySelector(".skills-carousel-set");
      const secondSet = firstSet ? firstSet.nextElementSibling : null;
      if (!track || !firstSet || !secondSet) return;
      
      // Use getBoundingClientRect for more accurate measurements
      const firstRect = firstSet.getBoundingClientRect();
      const secondRect = secondSet.getBoundingClientRect();
      const oneSetWidthPx = firstRect.width;
      // Calculate gap more precisely
      const gapPx = secondRect.left - firstRect.right;
      // Ensure loopPx accounts for the gap between sets
      const loopPx = oneSetWidthPx + Math.max(gapPx, 0);
      
      // Ensure track is wide enough
      const minTrackWidth = wrap.offsetWidth + loopPx;
      while (track.scrollWidth < minTrackWidth) {
        const clone = firstSet.cloneNode(true);
        track.appendChild(clone);
      }
      
      // Re-measure after cloning to ensure accuracy
      const finalFirstRect = firstSet.getBoundingClientRect();
      const finalSecondRect = secondSet.getBoundingClientRect();
      const finalOneSetWidthPx = finalFirstRect.width;
      const finalGapPx = finalSecondRect.left - finalFirstRect.right;
      const finalLoopPx = finalOneSetWidthPx + Math.max(finalGapPx, 0);
      
      carousels.push({ 
        track, 
        offset: 0, 
        loopPx: finalLoopPx, 
        speed: pxPerSecond 
      });
    });
  }
  
  // Initialize after a brief delay to ensure layout is complete
  if (document.readyState === "complete") {
    setTimeout(initCarousels, 10);
  } else {
    window.addEventListener("load", () => setTimeout(initCarousels, 10));
  }

  let lastTime = null;
  function tick(now) {
    if (lastTime === null) {
      lastTime = now;
      requestAnimationFrame(tick);
      return;
    }
    
    const dt = (now - lastTime) / 1000;
    lastTime = now;
    
    carousels.forEach((c) => {
      c.offset -= c.speed * dt;
      // Seamless wrapping: when we've scrolled one full loop, reset to 0
      // This ensures the visual content aligns perfectly
      while (c.offset <= -c.loopPx) {
        c.offset += c.loopPx;
      }
      // Use transform3d for better hardware acceleration and sub-pixel precision
      c.track.style.transform = `translate3d(${c.offset}px, 0, 0)`;
    });
    
    requestAnimationFrame(tick);
  }
  
  // Start animation after carousels are initialized
  setTimeout(() => {
    requestAnimationFrame(tick);
  }, 50);

  /**
   * @param {string} s
   * @returns {string}
   */
  function escapeAttr(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /**
   * @param {string} s
   * @returns {string}
   */
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
