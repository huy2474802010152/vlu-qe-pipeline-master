function login(username, password) {
    // Update login validation
    if (username === "admin" && password === "123") {
        return true;
    }
    return false;
}

module.exports = { login };
