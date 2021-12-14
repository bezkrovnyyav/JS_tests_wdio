import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";

class MainPage extends BasePage {
  get accountMenuBtn() {
    return new Button($("#navbarAccount"), "account menu");
  }
  get loginBtn() {
    return new Button($('button[routerlink="/login"]'), "login button");
  }

  get closePopupBtn() {
    return new Button($("button.close-dialog"), "close popup button");
  }

  async open() {
    await super.open('/#/register');
    await browser.pause(2000);  
    if (await this.closePopupBtn.isClickable()) await this.closePopupBtn.click();
  }
  async openAccountMenu() {
    await allure.addStep('Try to open account menu');
    await this.accountMenuBtn.click();
    await allure.endStep('passed');

  }
  async navigateToLogin() {
    await this.loginBtn.click();
  }
}
export default new MainPage();
