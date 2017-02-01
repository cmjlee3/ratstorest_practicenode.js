const router = require('express').Router();
const ratsShow = require('../models/rats');

const dbRats = ratsShow();

router.get('/rats', (req, res) => {
  res.render('./rats/index');
});

router.get('/rats/show', dbRats.getRats, (req, res) => {
  res.render('./rats/show', {
  results: res.filteredRats,
  });
});


module.exports = router;
