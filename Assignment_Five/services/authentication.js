// services/authentication.js

const adminUser = { username: 'Admin', password: '123' };

class AuthenticationService {
    authenticate(username, password) {
        if (adminUser.username === username && adminUser.password === password) {
            return { isAuthenticated: true, user: adminUser };
        } else {
            return { isAuthenticated: false };
        }
    }
}

module.exports = AuthenticationService;
