# Verifakt React landing page

This is a React/Vite conversion of the supplied Verifakt HTML landing page.

## Included

- React component structure instead of static HTML/JS.
- Existing Verifakt visual language, typography, colors and responsive behavior.
- Dedicated anchored sections for:
  - How it works
  - Who it's for
  - Clients / client value
  - Sign in / project access
  - Contact
- Mobile navigation.
- React state for login/contact preview interactions.
- The supplied embedded Verifakt logo extracted into `public/verifakt-logo.png`.

## Run

```bash
npm install
npm run dev
```

## Connect the real project login

Create a `.env` file:

```env
VITE_DASHBOARD_URL=https://your-dashboard-url.com
```

The Sign in button will then redirect to that dashboard URL after the form is submitted.

For a production authentication flow, replace that redirect in `src/App.jsx` with your real authentication API or router.

## Client section

The client section currently uses generic client-value cards rather than inventing real client names. Replace the `clientOutcomes` array in `src/App.jsx` with your actual client names, logos, case studies or testimonials when you have them.
