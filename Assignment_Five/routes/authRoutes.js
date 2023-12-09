// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const AuthenticationService = require('../services/authentication');
const authService = new AuthenticationService();

router.get('/', (req, res) => {
    res.render('login', { title: 'Login Page' });
});

router.post('/', (req, res) => {
    const { username, password } = req.body;

    const result = authService.authenticate(username, password);

    if (result.isAuthenticated) {

        req.session.user = result.user;
        req.session.isAuthenticated = true;

        res.redirect('/api/users');
    } else {
        res.redirect('/alert'); 
    }
});

module.exports = router;
