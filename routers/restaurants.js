const router = require('express').Router();
const restaurantsShow = require('../models/restaurants');

const dbRestaurants = restaurantsShow();

router.get('/restaurants', (req, res) => {
  res.render('./restaurants/index');
});

router.get('/restaurants/show', dbRestaurants.getRestaurants, (req, res) => {
  res.render('./restaurants/show', {
  results: res.filteredRestaurants,
  });
});

module.exports = router;
