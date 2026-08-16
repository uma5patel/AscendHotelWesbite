# Ascend Hotel Group Website

React and Vite website for Ascend Hotel Group.

## Development

```bash
npm install
npm run dev
```

## Contact Email Backend

The contact form posts to `api/send-email.js`, which is designed for a Vercel
serverless deployment. It sends email through Resend without exposing the API
key in the frontend.

Add these environment variables in the hosting dashboard:

```bash
RESEND_API_KEY=re_your_resend_api_key_here
RESEND_FROM_EMAIL="Ascend Hotel Group <onboarding@resend.dev>"
```

For production, replace `RESEND_FROM_EMAIL` with a verified sender/domain in
Resend.

## Checks

```bash
npm run lint
npm run build
```
