const users = require('../data/fakeUsers.json');

class UserService {
    constructor() {
        this.users = users;
    }

    getAllUsers() {
        return this.users;
    }

    getUserById(id) {
        const user = this.users.find(u => u.id === id);
        return user || null;
    }

    addUser(newUser) {
        newUser.id = this.users.length + 1; 
        this.users.push(newUser);
        return newUser;
    }

    updateUser(id, updatedUser) {
        const userIndex = this.users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
            return this.users[userIndex];
        }
        return null;
    }

    deleteUser(id) {
        const userIndex = this.users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            return true;
        }
        return false;
    }
}

module.exports = UserService;
