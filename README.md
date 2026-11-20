# Tushar Tyagi — personal site (Field Desk)

A static site built with [Astro](https://astro.build). Everything you write is a Markdown file in `content/`; the design lives in `src/` and you rarely need to touch it.

## Run it on your computer

You need [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install        # once
npm run dev        # preview at http://localhost:4321, updates as you save
npm run build      # build the live site into dist/ (the deploy does this for you)
```

## Where things live

```
content/
  about.md               ← About window: name, role, photo, bullets
  now.md                 ← "Now" window
  projects/*.md          ← one file per project
  posts/*.md             ← one file per blog post
public/
  photo.jpg              ← (add yours) referenced from about.md
  figures/               ← images for projects and posts
site.config.ts           ← links, tag colours, comments settings
figures.mplstyle         ← matplotlib style that matches the site
figures/example_plot.py  ← example of using it
src/                     ← the design (layouts, windows, styles)
src/styles/global.css    ← every colour and font in one place
```

## Everyday tasks

**Write a post**

```bash
npm run new:post -- "My post title"
```

This creates `content/posts/my-post-title.md` with `draft: true`. Drafts show up in `npm run dev` but not on the live site. Set `draft: false` when it's ready, then push.

**Add a project**

```bash
npm run new:project -- "My project title"
```

Fill in `finding` (the one line on the homepage), `tag`, `figure` and `link`. Set `featured: true` on one project to show it as the dark, selected row. Delete a file to remove a project or post.

**Figures**

```python
plt.style.use("figures.mplstyle")
...
fig.savefig("public/figures/my-plot.svg")
```

Use it in a project (`figure: /figures/my-plot.svg`) or in a post:

```markdown
![Alt text for screen readers](/figures/my-plot.svg "Fig. 2 — The caption under the figure")
```

An image on its own line **with a caption in quotes** gets the framed figure panel automatically.

**Highlights in the About bullets**: wrap a phrase in `==double equals==`.

**Tags**: any word works. Give it a colour in `site.config.ts` (`sage`, `butter`, `lilac`, `plain`, or `dashed`). Tags without a colour are dashed.

**Your photo**: put it in `public/photo.jpg` and set `photo: /photo.jpg` in `content/about.md`.

## Publish with GitHub Pages (one-time setup)

1. Create a new **public** repo on GitHub named **`tushar-r-tyagi.github.io`** (empty, no README).
2. Move the deploy workflow into place (it's in `setup/` because it couldn't be written into `.github/` directly). In PowerShell, inside this folder:
   ```powershell
   New-Item -ItemType Directory -Force .github\workflows | Out-Null
   Move-Item setup\deploy.yml .github\workflows\deploy.yml
   ```
3. In this folder:
   ```bash
   git init
   git add .
   git commit -m "First version of the site"
   git branch -M main
   git remote add origin https://github.com/Tushar-R-Tyagi/tushar-r-tyagi.github.io.git
   git push -u origin main
   ```
4. On GitHub: **Settings → Pages → Source: GitHub Actions**.

Every push to `main` now rebuilds the site; it's live at `https://tushar-r-tyagi.github.io` about a minute later. (If you use a different repo name or a custom domain, update `site` in `astro.config.mjs`.)

After that, publishing is:

```bash
git add .
git commit -m "New post: ..."
git push
```

You can also edit any Markdown file directly on github.com and commit — that triggers a rebuild too.

## Turn on comments (giscus)

Comments are stored as GitHub Discussions in your repo. Free, no ads, no tracking; commenters sign in with GitHub.

1. Repo **Settings → General → Features**: tick **Discussions**.
2. In the **Discussions** tab, create a category called **Comments** (type: *Announcement*, so only giscus can create threads).
3. Install the giscus app: <https://github.com/apps/giscus> → choose this repo.
4. Go to <https://giscus.app>, enter your repo, pick the **Comments** category, and copy the `data-repo-id` and `data-category-id` values.
5. Paste them into `site.config.ts` under `giscus`, then push.

Comments use the Field Desk theme in `public/giscus-field-desk.css` (loaded from your live site, so it shows once the site is deployed). Turn comments off for a single post with `comments: false` in its frontmatter.

## RSS

The site publishes a feed at `/rss.xml` automatically, with every published post. Nothing to maintain.

## Changing the look

- Colours and fonts: top of `src/styles/global.css`.
- Window component: `src/components/Window.astro`.
- Pixel icons: `src/components/PixelIcon.astro`.
- Homepage layout: `src/pages/index.astro`.
