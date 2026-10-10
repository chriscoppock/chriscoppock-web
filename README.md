# chriscoppock.com

Static personal site: Next.js, Tailwind, Markdown posts. No database, no CMS.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000 (drafts visible)
npm run build    # writes the finished site to /out
```

## Edit

| What | Where |
|---|---|
| Name, email, LinkedIn URL, headline, intro, focus areas, certs | `site.config.ts` |
| About page copy | `app/about/page.tsx` |
| Colors and fonts | `app/globals.css`, `app/layout.tsx` |
| Posts | `content/posts/*.md` |

New post: copy `content/posts/sample-post.md`, rename it (the file name is the URL), set the
title/date/description, and remove `draft: true` when it's ready.

## Deploy

Any static host works. Cloudflare Pages, Vercel, and Netlify all have free tiers.

- Build command: `npm run build`
- Output directory: `out`
- Add `chriscoppock.com` as the primary domain, then add `chriscoppock.dev` and set it to redirect
  to the `.com`.

## Before you publish

- Replace the placeholder email and LinkedIn URL in `site.config.ts`
- Rewrite the About copy in your own voice
- No customer or agency names anywhere, and nothing from cleared work
- Leave your clearance off the site
- Check the About and focus-area copy against your employer's social media policy
