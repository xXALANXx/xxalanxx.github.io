/**
 * Reads project id from URL and renders the project detail page using inlined PROJECTS_DATA.
 */

(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const article = document.getElementById("project-article");

  if (!id || !article) {
    article.innerHTML = "<p>Project not found. <a href='index.html#projects'>Back to projects</a>.</p>";
    return;
  }

  const projects = window.PROJECTS_DATA;
  const p = Array.isArray(projects) ? projects.find((x) => x.id === id) : null;

  if (!p) {
    article.innerHTML = "<p>Project not found. <a href='index.html#projects'>Back to projects</a>.</p>";
    return;
  }

  const thumb = p.thumbnail || (p.images && p.images[0]) || "";
  const thumbSrc = thumb ? encodeURI(thumb) : "";
  const heroImg = thumb
    ? `<img src="${escapeAttr(thumbSrc)}" alt="" onerror="this.parentElement.classList.add('placeholder'); this.remove(); this.nextElementSibling.style.display='block';" /><span style="display:none">Project image</span>`
    : '<span>Project image</span>';
  const heroClass = thumb ? "" : " placeholder";
  const tags = (p.tags || [])
    .map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`)
    .join("");
  const images = p.images || [];
  const galleryItems = images.map((src, i) => {
    const imgSrc = encodeURI(src);
    return `<figure class="gallery-item" data-index="${i}"><img src="${escapeAttr(imgSrc)}" alt="Image ${i + 1}" loading="lazy" onerror="this.parentElement.innerHTML='<span>Image</span>'; this.parentElement.classList.add('placeholder');" /></figure>`;
  }).join("");
  const galleryClass = galleryItems ? "" : " placeholder";
  const galleryInner = galleryItems || "<figure><span>Add images in projects.json and under images/projects/</span></figure>";
  const links = p.links && p.links.length;
  const linksHtml = links
    ? `<h3>Design files &amp; links</h3><ul class="project-links">${p.links.map((l) => `<li><a href="${escapeAttr(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a></li>`).join("")}</ul>`
    : "";

  // Find hero image index in images array
  let heroIndex = 0;
  if (images.length > 0 && thumb) {
    const thumbIndex = images.findIndex((src) => src === thumb);
    heroIndex = thumbIndex >= 0 ? thumbIndex : 0;
  }

  document.title = p.title + " | Alan Zhao";
  article.className = "project-article";
  const dateLine = p.date ? `<p class="project-date">${escapeHtml(p.date)}</p>` : "";
  article.innerHTML = `
    <div class="project-hero-image${heroClass}${images.length > 0 ? ' gallery-item-hero' : ''}" ${images.length > 0 ? `data-index="${heroIndex}"` : ''}>${heroImg}</div>
    <h1>${escapeHtml(p.title)}</h1>
    <div class="project-meta">${dateLine}${tags ? `<div class="project-tags">${tags}</div>` : ""}</div>
    ${p.longDesc ? `<div class="long-desc">${escapeHtml(p.longDesc)}</div>` : ""}
    <h3>Gallery</h3>
    <div class="project-gallery${galleryClass}">${galleryInner}</div>
    ${linksHtml}
  `;

  // Initialize lightbox
  if (images.length > 0) {
    initLightbox(images);
  }

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

  /**
   * Initializes the lightbox gallery functionality.
   * @param {string[]} imageSources
   */
  function initLightbox(imageSources) {
    // Create lightbox HTML
    const lightboxHTML = `
      <div class="lightbox" id="lightbox" aria-hidden="true">
        <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
        <button class="lightbox-nav lightbox-prev" aria-label="Previous image">&#8249;</button>
        <button class="lightbox-nav lightbox-next" aria-label="Next image">&#8250;</button>
        <div class="lightbox-content">
          <img class="lightbox-image" src="" alt="" />
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", lightboxHTML);

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox.querySelector(".lightbox-image");
    const closeBtn = lightbox.querySelector(".lightbox-close");
    const prevBtn = lightbox.querySelector(".lightbox-prev");
    const nextBtn = lightbox.querySelector(".lightbox-next");
    let currentIndex = 0;

    // Open lightbox
    function openLightbox(index) {
      currentIndex = index;
      updateLightboxImage();
      lightbox.setAttribute("aria-hidden", "false");
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    // Close lightbox
    function closeLightbox() {
      lightbox.setAttribute("aria-hidden", "true");
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }

    // Update lightbox image
    function updateLightboxImage() {
      const src = imageSources[currentIndex];
      lightboxImg.src = encodeURI(src);
      lightboxImg.alt = `Image ${currentIndex + 1} of ${imageSources.length}`;
    }

    // Navigate to previous image
    function prevImage() {
      currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
      updateLightboxImage();
    }

    // Navigate to next image
    function nextImage() {
      currentIndex = (currentIndex + 1) % imageSources.length;
      updateLightboxImage();
    }

    // Event listeners
    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      prevImage();
    });
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      nextImage();
    });

    // Close on backdrop click
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("active")) return;
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    });

    // Make gallery items clickable
    article.querySelectorAll(".gallery-item, .gallery-item-hero").forEach((item) => {
      item.style.cursor = "pointer";
      item.addEventListener("click", () => {
        const index = parseInt(item.getAttribute("data-index") || "0", 10);
        openLightbox(index);
      });
    });
  }
})();
