# personal-website

A one-page portfolio site for a photographer, built with Next.js (App Router),
Tailwind CSS v4, and shadcn/ui. The design is intentionally restrained: a warm
near-monochrome palette, generous whitespace, square corners, a serif display
face (Cormorant Garamond) over a quiet sans (Inter). Dark mode has a toggle in
the header (or press `d`).

## Getting started

```bash
pnpm install
pnpm dev
```

Other scripts: `pnpm build`, `pnpm lint`, `pnpm typecheck`.

## Structure

| Path                              | Purpose                                          |
| --------------------------------- | ------------------------------------------------ |
| `lib/site.ts`                     | All site content: name, email, photos, pricing   |
| `app/page.tsx`                    | Page composition (single page with sections)     |
| `components/site/site-header.tsx` | Fixed header + anchor navigation                 |
| `components/site/hero.tsx`        | Introduction and hero photograph                 |
| `components/site/work-gallery.tsx`| "Selected work" photo grid                       |
| `components/site/pricing.tsx`     | Pricing table (placed between work and contact)  |
| `components/site/contact.tsx`     | Email contact section                            |
| `components/site/site-footer.tsx` | Footer                                           |
| `components/site/theme-toggle.tsx`| Dark mode toggle (header)                        |

## Replacing placeholder content

Every photograph currently on the page is a **placeholder** — sourced from
`picsum.photos` (grayscale) and stored in `public/images/`. They are all
wired up in one file, `lib/site.ts`:

1. `heroPhoto` — `public/images/hero.jpg`, the large image at the top.
2. `workPhotos` — `public/images/work-01.jpg` … `work-08.jpg`, the eight
   photographs in the "Selected work" grid.

To replace one:

- Overwrite the file in `public/images/` keeping the same name, **or** add
  your file anywhere under `public/` and update `src` in `lib/site.ts`.
- Update `alt` with a real description of the photograph.
- Update `title` and `year` — these render as the caption.

Also replace the following text placeholders (all in `lib/site.ts`):

- `site.name` — "Mara Voss" is a stand-in, used in the header, intro,
  metadata title, and footer.
- `site.email` — `hello@example.com`, used by the two `mailto:` links
  (hero and contact section).
- `site.description` — the page description for search engines and link
  previews, wired into `app/layout.tsx` metadata.
- `intro.label`, `intro.headline`, `intro.body` — the introduction copy.
- `pricing` and `pricingNote` — the three offerings and their starting
  prices. The note derives "Travel within …" from `site.location`, so
  updating the location keeps it consistent.
- `site.location` — shown in the contact section and used in the pricing
  note.

The tab icon (`app/favicon.ico`) is a generated placeholder mark — replace
it with your own if you have one.

## Adding shadcn components

```bash
npx shadcn@latest add <component>
```
