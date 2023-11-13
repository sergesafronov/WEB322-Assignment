const express = require('express');
const router = express.Router();
const AuthenticationService = require('../services/authentication');
const authService = new AuthenticationService();

router.get('/', (req, res) => {
    res.render('login', { title: 'Login Page' });
});

router.post('/', (req, res) => {
    const { email, password } = req.body; 
    const result = authService.authenticate(email, password);

    if (result.isAuthenticated) {
        res.redirect('/list');
    } else {
       res.redirect('/alert');
    }
});

module.exports = router;
