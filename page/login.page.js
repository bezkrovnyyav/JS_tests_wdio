import Input from "../elements/input.js";
import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Div from "../elements/div.js";

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
  get logoutBtn(){
    return new Button($('#navbarLogoutButton'), "log out button");
  }
  get errorMsg(){
    return new Div($("//div[contains(@class, 'error')]"), "div element with error");
  }
  async open(url) {
    await allure.addStep(`Try to open url`);
    await super.open(url);
    if (await this.closePopupBtn.isExisting()) await this.closePopupBtn.click();
    await allure.endStep('passed');
  }
  async loginIn(email, pass) {
    await allure.addStep(`Try to login with ${email} and ${pass}`);
    await this.emailField.setValue(email);
    await this.passwordField.setValue(pass);
    await this.loginBtn.click();
    await allure.endStep(`passed`);
  }
}

export default new LoginPage();
