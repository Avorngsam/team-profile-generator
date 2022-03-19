class Manager {
    constructor (name, id, email) {
     this.name = name;
     this.id = id;
     this.email = email;
     this.role = 'Manager'
    }

getName() {
    return this.name
}

getId() {
    return this.id
}

getEmail() {
    return `mailto:${this.email}`;
}

getRole() {
    return this.role
}

getOfficenumber() {
    return `mailto:${this.email}`;
}

}

module.exports = Manager;