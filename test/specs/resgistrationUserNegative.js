import loginPage from "../../page/login.page.js";
import userRegistrationPage from "../../page/userRegistration.page.js";
import { Chance } from "chance";
let chance = new Chance();

let email = "errormassage";
let pass = chance.string({ length: 4 });
let secureAnswer = chance.color();
let option = "Mother's maiden name?";

describe("Register new user", () => {
  it("shouldn't register new user with invalid credentials", async () => {
    //register new user
    await loginPage.open('http://localhost:3000/#/login');
    await userRegistrationPage.addNewCustomer();
    await userRegistrationPage.fillRegistrationForm(email, pass, secureAnswer, option);
    //expect to show error email and pass
    await expect($("div#registration-form mat-error").isDesplayed());
  });
});
