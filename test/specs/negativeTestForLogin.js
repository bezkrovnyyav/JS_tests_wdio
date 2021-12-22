import loginPage from "../../page/login.page.js";

describe("Login test application", () => {
  it("shouldn't login with invalid credentials", async () => {
    await loginPage.open(`http://localhost:3000/#/login`);
    await loginPage.loginIn("user123@test.com", "test123");
    //expect to negative
    await expect(loginPage.errorMsg).toBeDisplayed();
  });
});