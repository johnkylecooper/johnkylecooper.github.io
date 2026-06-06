# Howdy

This repository powers my personal site at https://johnkylecooper.github.io.

The site is organized as a small Jekyll project with a quiet public homepage and private AI-assisted editorial workflow.

## Structure

- `_layouts/` contains shared page templates
- `_includes/` contains reusable head and navigation partials
- `_data/` contains navigation and CV-backed public facts
- `_inbox/` contains rough private notes for future AI-assisted drafting
- `_drafts/` contains unpublished AI-shaped drafts and preserved reference material
- `_recommendations/` contains private recommendations about future site/CV work
- `assets/css/` contains the shared front-end styles
- `index.html` is the public homepage
- `about.html` and `blog.html` redirect old routes back to the homepage

## Local development

1. Install Ruby and Bundler.
2. Run `bundle install`.
3. Run `bundle exec jekyll serve`.

## CV generation

The CV source is `JKC_CV.yaml`. It uses the local `cvtheme/` RenderCV theme, a small copy of `engineeringclassic` with a custom header that renders Font Awesome 7 icons directly from the bundled RenderCV fonts.

Generate the PDF with:

```sh
.venv/bin/rendercv render JKC_CV.yaml
```

The generated CV is deployed as a static asset at `assets/documents/John_Kyle_Cooper_CV.pdf`.

Private workflow folders are not public content. Drafts, inbox notes, and recommendations should only become live site material after explicit approval.
