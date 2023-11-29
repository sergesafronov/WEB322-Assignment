const adminUser = { username: 'Admin', password: '123' };

class AuthenticationService {
    constructor() {
        this.authenticatedUser = adminUser;
    }

    authenticate(username, password) {
        if (this.authenticatedUser.name === username && this.authenticatedUser.password === password) {
            return { isAuthenticated: true, user: this.authenticatedUser };
        } else {
            return { isAuthenticated: false };
        }
    }
}

module.exports = AuthenticationService;