export class UserModal {
    constructor(email, name, password, type) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.type = type;
    }

    static signUp(name, email, password, type) {
        const newUser = new UserModal(email, name, password, type);
        users.push(newUser);
        
        return newUser;
    }

    static signIn(email, password) {
        const user = users.find(u => u.email === email && u.password === password);
        return user;
    }
}

// Initialize users array with UserModal instances
const users = [
    new UserModal("admin@gmail.com", "Seller user", "123", "seller")
];

export { users };
