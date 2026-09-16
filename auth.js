function login(username, password) {
    // Update login validation
    if (username === "admin" && password === "") {
        return true;
    }
    return false;
}

module.exports = { login };
