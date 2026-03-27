# Lias Cleaning Co. — Website

Revamped website for **Lias Cleaning Co.**, Nashville TN.

## 📁 File Structure

```
lias-cleaning/
├── index.html          ← Main page (all sections)
├── css/
│   └── style.css       ← All styles, tokens, responsive
├── js/
│   └── script.js       ← Nav, FAQ accordion, forms, scroll reveals
├── assets/
│   └── logo.svg        ← Logo placeholder (replace with real logo)
└── README.md
```

## 🚀 Getting Started

Just open `index.html` in any browser — no build tools required.
For production, upload all files to your host (Vercel, Netlify, cPanel, etc.)
keeping the folder structure intact.

## 📞 Contact Info (from liascleaningco.org)

- **Primary:** 615-674-9399
- **Alternate:** 615-209-0300
- **Email:** info@liascleaningco.org
- **Photos / Booking email:** liascleaningco@gmail.com

## 📋 To-Do Before Launch

1. **Replace logo** — swap `assets/logo.svg` with the real logo file.
   Update the `<img>` tags in `index.html` if using a PNG/WebP.

2. **Wire up forms** — in `js/script.js`, find the two `console.log` lines
   and replace them with your form handler. Options:
   - [Formspree](https://formspree.io) — free, no backend needed
   - [EmailJS](https://www.emailjs.com) — sends email directly from JS
   - Custom backend endpoint

3. **Add favicon** — place a `favicon.ico` (or PNG) in the root folder
   and add to `<head>` in index.html:
   ```html
   <link rel="icon" type="image/png" href="assets/favicon.png" />
   ```

4. **Google Analytics / Meta Pixel** — paste your tracking scripts
   just before `</body>` in `index.html`.

5. **OG meta tags** — update the `<meta>` description and add:
   ```html
   <meta property="og:title" content="Lias Cleaning Co." />
   <meta property="og:description" content="Reliable, detailed residential cleaning in Nashville, TN." />
   <meta property="og:image" content="https://yourdomain.com/assets/og-image.jpg" />
   ```

## 🎨 Design Tokens (CSS variables)

Edit the `:root` block at the top of `css/style.css` to change colors:

| Variable        | Value     | Use                        |
|-----------------|-----------|----------------------------|
| `--green`       | #1a3a2a   | Primary brand color        |
| `--green-mid`   | #2d5c43   | Hover states               |
| `--green-light` | #4a8c68   | Accents, borders           |
| `--gold`        | #c9a96e   | Italic highlights, stars   |
| `--cream`       | #faf8f4   | Page background            |
| `--charcoal`    | #1e1e1e   | Footer, dark text          |

## 📱 Responsive Breakpoints

| Breakpoint | Layout                        |
|------------|-------------------------------|
| > 1024px   | Full desktop                  |
| 900–1024px | Adjusted gaps / columns       |
| 600–900px  | Single column, mobile nav     |
| < 600px    | Fully stacked, compact footer |

---

© 2026 Lias Cleaning Co. All rights reserved.
