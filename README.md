# Brinebox Logistics Website

Production-ready static website foundation for a freight forwarding and logistics company. The project uses Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, reusable UI components, and a static export configuration for Cloudflare Pages.

## Folder Structure

- `config/site.ts` - single source for company details, navigation, social links, SEO, and form provider settings.
- `src/app/` - public routes, SEO metadata routes, root layout, and custom 404 page.
- `src/components/` - layout, section, form, and reusable UI components.
- `src/lib/` - shared content, SEO helpers, form submission driver, and utility functions.
- `src/features/` - reserved future modules for CRM, customer portal, shipment tracking, admin dashboard, and analytics.
- `public/` - replaceable logo, company profile PDF, favicon, and image placeholders.

## Run Locally

This machine needs Node.js added to PATH per command:

```bash
cmd.exe /c "set PATH=C:\Program Files\nodejs;%PATH% && npm run dev"
```

Open `http://localhost:3000`.

## Production Build

```bash
cmd.exe /c "set PATH=C:\Program Files\nodejs;%PATH% && npm run build"
```

The build uses `output: "export"` in `next.config.ts` and writes the static site to `out/`.

## Deploy to Cloudflare Pages

- Build command: `npm run build`
- Output directory: `out`
- Framework preset: `Next.js` or `None` with the static output directory above
- Node version: use a current LTS version supported by Cloudflare Pages

Connect the GitHub repository to Cloudflare Pages, set the build command/output directory, then deploy. Add a custom domain in the Cloudflare Pages dashboard after the first successful deployment.

## Replace Company Information

Edit only `config/site.ts` for company name, tagline, email, phone, WhatsApp number, address, website URL, social links, Google Maps URL, SEO metadata, logo path, and company profile PDF path.

## Replace Assets

- Logo: replace `public/logo.png` with the final logo using the same filename.
- Images: replace files in `public/images/` and update references if filenames change.
- Company profile: replace `public/company-profile.pdf`; the download page updates automatically.
- Favicon: replace `src/app/favicon.ico` if a branded favicon is available.

## Configure Forms

Form submission is handled by `src/lib/form-submit.ts` and configured in `config/site.ts`.

Supported providers:

- `formspree` - set `formspreeId`
- `emailjs` - set `emailjsServiceId`, `emailjsTemplateId`, and `emailjsPublicKey`
- `resend` - set `resendEndpointUrl` for a secure Worker/server endpoint
- `cloudflare-workers` - set `cfWorkerUrl`

Do not expose private Resend API keys in client-side static builds. Use a Cloudflare Worker or secure endpoint.

## Change Theme Colors

Theme tokens live in `src/app/globals.css` and Tailwind extensions live in `tailwind.config.ts`. Update the CSS variables and `logistics` color palette to adjust the brand system.

## Add New Pages

Create a new route under `src/app/your-page/page.tsx`, use `createMetadata` from `src/lib/seo.ts`, and add the page to `config/site.ts` navigation or `src/app/sitemap.ts` when it should be public.
