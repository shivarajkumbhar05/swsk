# Shivaraj Kumbhar — Final Year Projects Site

React + Vite + Tailwind CSS rebuild of the "Final Year Project Solutions"
landing page, rebranded to **Shivaraj Kumbhar** (Founder & Full Stack MERN
Developer) and **Swarali Suryavanshi** (Co-Founder | UI/UX Designer &
Testing Engineer).

> Note: this project was reconstructed from a screenshot, since the original
> source files weren't available. Layout, sections, and functionality match
> the reference design (hero, category-filterable project catalog with
> search + load more, how-it-works steps, two-developer footer).

## Setup

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## Where to edit branding / contact info

Everything you're likely to need to change lives in **one file**:

`src/siteConfig.js`

- `DEVELOPERS[0].whatsappNumber` / `DEVELOPERS[1].whatsappNumber` — replace
  `"91XXXXXXXXXX"` with the real WhatsApp numbers (digits only, country
  code first, no `+`, spaces, or dashes).
- `DEVELOPERS[0].phoneDisplay` / `DEVELOPERS[1].phoneDisplay` — the
  human-readable phone numbers shown in the footer.
- `SITE.price`, `SITE.year` — price and copyright year.

SEO title/description/Open Graph tags are in `index.html`.

Project catalog data (all 112 entries, grouped by Website / Mobile-App /
IoT) is in `src/projectsData.js` — edit or add entries there.

## Structure

```
src/
  siteConfig.js         # branding + WhatsApp numbers (edit here)
  projectsData.js        # 112 project entries
  App.jsx
  components/
    Header.jsx
    Hero.jsx
    ProjectsSection.jsx  # search, category tabs, load more
    HowItWorks.jsx
    Footer.jsx           # two developer profiles + copyright
```
