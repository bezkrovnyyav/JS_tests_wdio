import loginPage from "../../page/login.page.js";
import mainPage from "../../page/main.page.js";
describe("Login test application", () => {
  it("should login with valid credentials", async () => {
    //main page
    await mainPage.open();
    await mainPage.openAccountMenu();
    await mainPage.navigateToLogin();
    //login page
    await loginPage.loginIn("user@test.com", "user123");
    //expect to positive test
    await mainPage.openAccountMenu();
    await expect($('#navbarLogoutButton')).toBeDisplayed();
  });
});