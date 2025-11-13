// Create a new router
const express = require('express');
const router = express.Router();

// ----- Define our data -----
const shopData = {
  shopName: 'The Thirsty Student',
  productCategories: ['Beer', 'Wine', 'Soft Drinks', 'Hot Drinks'],
  shops: [
    { name: 'YumBar', manager: 'Nila Mohammadi', address: '1 College Road, London SE14 6NW' },
    { name: 'FlavorFi', manager: 'Hana Mir', address: '22 Market Street, London SE10 8DR' }
  ]
};

// ----- Handle the main routes -----
router.get('/', (req, res) => {
  res.render('index.ejs', shopData);
});

router.get('/about', (req, res) => {
  // Pass full shopData so EJS can access shopName and shops array
  res.render('about.ejs', shopData);
});

router.get('/search', (req, res) => {
  res.render('search.ejs', { shopName: shopData.shopName });
});

// ===== Part C – Task 6: handle GET search form =====
router.get('/search_result', (req, res) => {
  // Collect query-string data from form submission
  const keyword = req.query.search_text;
  const category = req.query.category;

  // Show a friendly message with both values
  res.send(`You searched for "${keyword}" in category "${category}".`);
});

// ===== Part D – Tasks 7–8: register form (POST) =====
router.get('/register', (req, res) => {
  res.render('register.ejs', { shopName: shopData.shopName });
});

router.post('/registered', (req, res) => {
  const { first, last, email } = req.body;
  res.render('registered.ejs', {
    shopName: shopData.shopName,
    first,
    last,
    email
  });
});

// ===== Part E – Task 11: Survey =====
router.get('/survey', (req, res) => {
  // Render the survey form (uses productCategories)
  res.render('survey.ejs', shopData);
});

router.post('/survey_submitted', (req, res) => {
  // Extract submitted form data
  const { first, last, email, age, drink, student } = req.body;

  // Render the result page with all answers
  res.render('survey_result.ejs', {
    shopName: shopData.shopName,
    first,
    last,
    email,
    age,
    drink,
    student
  });
});

// Export the router object so index.js can access it
module.exports = router;
