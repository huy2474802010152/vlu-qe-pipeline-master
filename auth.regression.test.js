const { login } = require("./auth");

test("Regression - Password sai", () => {
    expect(login("admin", "9999")).toBe(false);
});

test("Regression - Username rỗng", () => {
    expect(login("", "123")).toBe(false);
});

test("Regression - Password chứa ký tự đặc biệt", () => {
    expect(login("admin", "@@@")).toBe(false);
});

test("Regression - Tài khoản không tồn tại", () => {
    expect(login("user", "123")).toBe(false);
});
