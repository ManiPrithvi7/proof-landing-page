# Proof Marketing Site

Public landing and legal pages for [withproof.io](https://www.withproof.io).

The authenticated product lives in the sibling **statsnapp** repo, deployed at `dashboard.withproof.io`.

## Local development

```bash
# Terminal 1 — dashboard (port 3000)
cd ../statsnapp && npm run dev

# Terminal 2 — marketing (port 3001)
npm run dev
```

Copy `.env.example` to `.env.local` and adjust URLs if needed.

## Routes

| Path | Description |
|------|-------------|
| `/` | Marketing landing |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Deployment

- **Domain:** `withproof.io` / `www.withproof.io`
- **Env:** `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_DASHBOARD_URL`
