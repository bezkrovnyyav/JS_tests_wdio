import Input from "../elements/input.js";
import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";

class LoginPage extends BasePage {
  get emailField() {
    return new Input($("#email"), "email input");
  }
  get passwordField() {
    return new Input($("#password"), "password input");
  }
  get loginBtn() {
    return new Button($("button#loginButton"), "login button");
  }
  get closePopupBtn() {
    return new Button($("button.close-dialog"), "close popup button");
  }
  async open() {
    await allure.addStep(`Try to open login page`);
    await super.open('/#/register');
    await browser.pause(2000);  
    if (await this.closePopupBtn.isClickable()) await this.closePopupBtn.click();
    await allure.endStep(`passed`);

  }

  async loginIn(email, pass) {
    await allure.addStep(`Try to fill login form via data`);
    await this.emailField.setValue(email);
    await this.passwordField.setValue(pass);
    await this.loginBtn.click();
    await allure.endStep(`passed`);

  }
}

export default new LoginPage();
