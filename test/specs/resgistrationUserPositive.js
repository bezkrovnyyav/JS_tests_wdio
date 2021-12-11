import loginPage from "../../page/login.page.js";
import mainPage from "../../page/main.page.js";
import userRegistrationPage from "../../page/userRegistration.page.js";
import { Chance } from "chance";


let chance = new Chance();
let email = chance.email({ domain: "example.com" });
let pass = chance.string({ length: 5 });
let secureAnswer = chance.color();
let option = "Mother's maiden name?";

describe("Registration new user", () => {
  it("Negative test for registration new user", async () => {
    //registration new user
    await loginPage.open();
    await userRegistrationPage.addNewCustomer();
    await userRegistrationPage.fillRegistrationForm(email, pass, secureAnswer, option);
    await browser.pause(2000);
    await userRegistrationPage.registrationButtonClick();
    await loginPage.loginIn(email, pass);
    await mainPage.openAccountMenu();
    //expect to positive test
    await expect($("#navbarLogoutButton")).toBeDisplayed();
  });
});
