const { login } = require("./auth");

test("Smoke Test - Login đúng", () => {
    expect(login("admin", "123")).toBe(true);
});
