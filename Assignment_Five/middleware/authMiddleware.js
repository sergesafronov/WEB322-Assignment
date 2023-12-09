// middleware/authMiddleware.js

function authMiddleware(req, res, next) {
    if (req.session.isAuthenticated && req.session.user.username === 'Admin') {
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = authMiddleware;