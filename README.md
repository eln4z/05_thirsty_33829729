# Thirsty Student (Express + EJS)

A tiny starter app that follows the Lab 5a-b steps: build routes, render EJS views, and pass dynamic data.

## Quick start

```bash
cd thirsty-student-ejs
npm install
npm start
```
Visit http://localhost:8000

## Files

- `index.js` — Express server + EJS setup
- `routes/main.js` — route handlers and `shopData`
- `views/` — EJS templates (`index.ejs`, `about.ejs`, `search.ejs`)

## What to try next

- Change `shopName` or add more categories in `routes/main.js`
- Make `about.ejs` and `search.ejs` use more data (e.g., descriptions)
- Add a `/public` folder for CSS/JS and call `app.use(express.static('public'))`
