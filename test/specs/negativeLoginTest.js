import loginPage from "../../page/login.page.js";
import mainPage from "../../page/main.page.js";
describe("Login test application", () => {
  it("shouldn't login with invalid credentials", async () => {
    //main page
    await mainPage.open();
    await mainPage.openAccountMenu();
    await mainPage.navigateToLogin();
    //login page
    await loginPage.loginIn("user@test.com", "user");
    //expect to negative
    await expect($("div.error")).toHaveText("Invalid email or password.");
  });
});
