import loginPage from "../../page/login.page.js";
import mainPage from "../../page/main.page.js";
import { Chance } from "chance";

let chance = new Chance();


describe("Found sold item flow", () => {
  it("check that item is sold ", async () => {
    await loginPage.open(`http://localhost:3000/#/login`);
    await loginPage.loginIn("user11@test.com", "test123");
    await mainPage.open(`http://localhost:3000/#/`);
    const item = $('//mat-grid-tile[12]');
    await item.scrollIntoView();
    await item.click();
    const subButton = $('button[type="submit"][disabled="true"]');
    await subButton.scrollIntoView();
    await await expect(subButton).toBeDisplayed();
  });
});