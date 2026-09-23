# Sasol Energy Hub (frontend demo)

This is a separate, static, frontend-only white-label build based on the Yami demonstration flow. It is deliberately isolated from the ASP.NET API and does not include credentials, provider integrations or live-money functionality.

The supplied Sasol visuals are copied into `assets/brand/`; the app never uses the temporary uploaded files directly.

## Run locally

From this directory:

```bash
python3 -m http.server 8090 --bind 127.0.0.1
```

Then open [http://localhost:8090/tabs/home/home/](http://localhost:8090/tabs/home/home/).

## Deploy to Vercel

Import the `sasol-energy-hub` directory as a static site. The included `vercel.json` keeps the application routes working; no build command is required.

Before any public or commercial release, replace demo data and UI claims with approved Sasol content and connect actions only to authenticated, server-side services.
