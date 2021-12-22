import loginPage from "../../page/login.page.js";
import mainPage from "../../page/main.page.js";
import userProfilePage from "../../page/userProfile.page.js";
import { Chance } from "chance";

let chance = new Chance();
let userName = chance.first();

describe("Edit user profile", () => {
  it("should change userName and photo", async () => {
    //main page
    await mainPage.open(`http://localhost:3000/#/`);
    await mainPage.openAccountMenu();
    await mainPage.navigateToLogin();
    //login page and go to user account
    await loginPage.loginIn("user@test.com", "test123");
    await mainPage.openAccountMenu();
    await userProfilePage.openUserProfile();
    //change username and expect result
    await userProfilePage.changeUserName(userName);
    await expect(userProfilePage.userNameInput).toHaveElementProperty("value", userName);
  });
});
