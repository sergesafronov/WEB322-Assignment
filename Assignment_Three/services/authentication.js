const users = require('../data/fakeUsers.json'); 

class AuthenticationService {
    constructor() {
        this.users = users;
    }

    authenticate(email, password) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].email === email && this.users[i].password === password) {
                return { isAuthenticated: true, user: this.users[i] };
            }
        }
        return { isAuthenticated: false };
    }
}

module.exports = AuthenticationService;