// routes/alert.js

const express = require('express');
const router = express.Router();

// Alert page
router.get('/alert', (req, res) => {
    res.render('alert', { title: 'Alert' });
});

module.exports = router;