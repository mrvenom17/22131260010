# React URL Shortener (Frontend-Only)

A simple and beautiful frontend-only URL shortener built with React and Material UI.  
It simulates real shortening functionality by generating unique shortcodes and storing them temporarily in memory.

---

## Features

- Unique shortcodes generated for each URL
- Optional custom shortcode support
- Optional validity timer (in minutes)
- Redirects to the original URL when clicked
- Frontend-only (no backend required)
- Built with React + TypeScript + Material UI

---

## How to Run

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev
#Open your browser at: http://localhost:5173
```

## Limitations
- URLs are stored in memory only (will reset on refresh)
- Cannot support true link sharing or redirection via short URL paths like /abc123
- Ideal for demo, frontend tasks, or simulation only

## Sample Behavior
- Paste a URL ➝ Click Shorten ➝ Copy the short link ➝ Click to go to the original site
- Each link is valid until:
-- The app is refreshed
-- (Optional) Expiration time has passed

## Built With
React + TypeScript
Vite
Material UI
