# Engineering Portfolio

A modern, static portfolio site with a main page (intro + project overview) and individual project pages with details and images.

## Run locally

Open `index.html` in a browser (double-click or drag into a tab). Projects are loaded from `projects-data.js`, so no server is required. You can also serve the folder with e.g. `npx serve .` if you prefer.

## Customize

1. **About section**  
   Edit the hero in `index.html`: change "Your Name", the short intro text, and the label "Engineer & Builder".

2. **Contact**  
   Update the email, LinkedIn, and GitHub links in the Contact section and footer in `index.html`.

3. **Projects and images**  
   - Edit `projects-data.js` (the array `window.PROJECTS_DATA`): add/remove projects; each project has `id`, `title`, `shortDesc`, `longDesc`, `tags`, `date`, `thumbnail`, `images` (array of paths or URLs), and optionally `links` (array of `{ label, url }` for design files).
   - **Copy your project photos** into the folder that matches the project name under `images/projects/`:
     - **Skid Plate** → `images/projects/Skid-Plate/`
     - **Chaotic Triple Pendulum** → `images/projects/Chaotic-Triple-Pendulum/`
     - **Custom Softwood Table** → `images/projects/softwood-table/`
     - **Model House** → `images/projects/Model-House/`
     - **Dual-Arm Gripper End Effector** → `images/projects/Dual-Arm-Gripper-End-Effector/`
     See `images/projects/README.md` for the full list. Update the `images` and `thumbnail` paths in `projects-data.js` to match your filenames.

## Structure

- `index.html` — main page (intro, project grid with skills carousel, contact)
- `project.html` — project detail page (used with `?id=project-id`)
- `projects-data.js` — project data (inlined so the site works without a server)
- `projects.json` — optional; same data for reference or tooling
- `styles.css` — global styles
- `main.js` — renders project grid and skills carousel on homepage
- `project.js` — renders project detail page
- `images/projects/` — put project images here (one folder per project recommended)
