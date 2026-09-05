How to publish this redirect on GitHub

Option A — Create the repo via the GitHub web UI
1. Go to https://github.com/new and create a new public repository named `projects` (no README necessary).
2. On your machine, run:

```bash
cd projects-redirect
git init
git add .
git commit -m "Add redirect to /Portfolio-dev/projects"
git branch -M main
git remote add origin git@github.com:abderrahmenlamloumi/projects.git
git push -u origin main
```

3. Wait a minute; the Pages site will be available at `https://abderrahmenlamloumi.github.io/projects`.

Option B — Use GitHub CLI (if installed and authenticated)

```bash
cd projects-redirect
gh repo create projects --public --source=. --remote=origin --push
```

Notes:
- This repository only contains a single `index.html` which will redirect visitors to `https://abderrahmenlamloumi.github.io/Portfolio-dev/projects`.
- If you prefer a different target, edit `index.html` and change the `/Portfolio-dev/projects` path.
