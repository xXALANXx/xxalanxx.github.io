# Fixing Image Issues on GitHub Pages / Linux Servers

## The Problem
Windows is **case-insensitive** (Skid-Plate = skid-plate), but Linux servers (like GitHub Pages) are **case-sensitive** (Skid-Plate ≠ skid-plate). This causes images to break when deployed.

## Quick Fix Steps

### 1. Verify File Paths Match Exactly
Check that folder names and filenames in your code match the actual files **exactly** (including capitalization):

**In your code:**
- `images/projects/Skid-Plate/Skid0.png`
- `images/projects/Model-House/Model0.jpeg`
- `images/headshot/Headshot.png`
- `images/header/McMaster-University-Sign.jpg`

**Your actual folders/files must match:**
- Folder: `Skid-Plate` (capital S, capital P)
- File: `Skid0.png` (capital S)
- Folder: `Model-House` (capital M, capital H)
- File: `Model0.jpeg` (capital M)
- Folder: `headshot` (lowercase)
- File: `Headshot.png` (capital H)
- Folder: `header` (lowercase)
- File: `McMaster-University-Sign.jpg` (exact capitalization)

### 2. Fix Case Sensitivity in Git

If your folders/files have wrong case, Git on Windows won't detect the change. Use these commands:

```bash
# Remove the folder from Git cache (but keep local files)
git rm -r --cached images/projects/Skid-Plate
git rm -r --cached images/projects/Model-House
git rm -r --cached images/projects/Chaotic-Triple-Pendulum
git rm -r --cached images/projects/Dual-Arm-Gripper-End-Effector
git rm -r --cached images/headshot
git rm -r --cached images/header

# Rename folders if needed (example - adjust to your actual case)
# Windows won't let you rename to same case, so use Git:
git mv images/projects/skid-plate images/projects/Skid-Plate-temp
git mv images/projects/Skid-Plate-temp images/projects/Skid-Plate

# Re-add everything
git add images/

# Commit and push
git commit -m "Fix case sensitivity for image paths"
git push
```

### 3. Verify All Images Are Committed

Make sure all image files are actually in Git:

```bash
# Check if images are tracked
git ls-files images/

# If images are missing, add them
git add images/
git commit -m "Add missing image files"
git push
```

### 4. Check File Extensions Match

Ensure extensions match exactly:
- `.png` vs `.PNG` (should be lowercase in code)
- `.jpeg` vs `.jpg` (must match exactly)
- `.JPG` vs `.jpg` (should be lowercase in code)

### 5. Spaces in Filenames

Files with spaces like `Copy of Desk0.jpeg` should work with `encodeURI()`, but consider renaming to avoid issues:
- `Copy of Desk0.jpeg` → `Desk0.jpeg`
- Update paths in `projects-data.js` accordingly

## Common Issues Checklist

- [ ] Folder names match exactly (case-sensitive)
- [ ] Filenames match exactly (case-sensitive)
- [ ] File extensions match exactly (.png vs .PNG)
- [ ] All images are committed to Git (`git ls-files images/`)
- [ ] No spaces or special characters in paths (or properly encoded)
- [ ] Pushed to GitHub and waited for Pages to rebuild

## Testing Locally Before Deploy

Test with a local server to catch case issues:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Then visit http://localhost:8000
```

## Still Not Working?

1. **Check browser console** (F12) for 404 errors - this shows exact paths being requested
2. **Check GitHub repo** - verify files exist at the exact paths shown in errors
3. **Clear browser cache** - old cached 404s might persist
4. **Wait for GitHub Pages rebuild** - can take a few minutes after push
