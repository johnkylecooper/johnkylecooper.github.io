# Howdy

This repository powers my personal site at https://johnkylecooper.github.io.

The site is now organized as a small Jekyll project so pages, shared layout, styling, and navigation are easier to maintain over time.

## Structure

- `_layouts/` contains shared page templates
- `_includes/` contains reusable head and navigation partials
- `_data/` contains navigation items and homepage prompt content
- `assets/css/` and `assets/js/` contain the shared front-end assets
- `about.html`, `blog.html`, and `index.html` are Jekyll pages with front matter

## Local development

1. Install Ruby and Bundler.
2. Run `bundle install`.
3. Run `bundle exec jekyll serve`.

The generated CV is deployed as a static asset at `assets/documents/John_Kyle_Cooper_CV.pdf`.
