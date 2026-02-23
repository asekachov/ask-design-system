# ask-design-system

Shared CSS design tokens, components, and JS helpers for Ask products.

## Usage

### CSS (via @import)

```css
@import url('/static/ask-ds/ask-ds.css');

/* Product-specific overrides below */
```

Or link directly:

```html
<link rel="stylesheet" href="/static/ask-ds/ask-ds.css">
```

### JS helpers

```html
<script src="/static/ask-ds/helpers.js"></script>
```

Provides:
- `escapeHtml(text)` — XSS-safe text rendering
- `formatContent(text)` — bold + code markdown rendering
- `copyText(text)` — copy to clipboard with button feedback

### Serving from FastAPI

```python
from fastapi.staticfiles import StaticFiles

app.mount("/static/ask-ds", StaticFiles(directory="../060 ask-design-system"), name="ask-ds")
```

## Storybook

Open `storybook/index.html` in a browser to preview all components.

## Structure

```
tokens.css           — CSS custom properties (:root)
base.css             — Reset, body, hidden, scrollbar
components/          — Individual component stylesheets
layouts/             — Layout stylesheets (sidebar, auth)
ask-ds.css           — Barrel file (@imports everything)
helpers.js           — Shared JS utilities
storybook/           — Component preview page
```
