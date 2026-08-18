tujy859/blogs — my blogs for learning and recording

What's included
- _config.yml — site config (title, theme)
- index.md — homepage that lists posts
- _posts/2026-08-18-welcome-to-my-blog.md — example post
- assets/styles.css — minimal stylesheet

Enable GitHub Pages
1. Go to the repository Settings → Pages.
2. Under "Build and deployment", choose the branch: `main` and folder: `/ (root)` then Save.
3. After a minute GitHub will publish your site at `https://tujy859.github.io/blogs/` (or your custom domain if configured).

Preview locally (optional)
1. Install Ruby and Bundler.
2. Add a Gemfile if you want local theme builds, or run `gem install jekyll bundler` then `bundle exec jekyll serve` from the repo root.

Add new posts
- Create a file `_posts/YYYY-MM-DD-your-title.md` with front matter:
  ---
  layout: post
  title: "My new post"
  date: 2026-08-18 12:00:00 +0000
  ---

Customization
- Change `_config.yml` to update the title or theme.
- Add images under `assets/` and reference them from posts.

If you want, I can also:
- Add a GitHub Actions workflow to build/deploy automatically.
- Switch to a different theme or scaffold a custom layout.
