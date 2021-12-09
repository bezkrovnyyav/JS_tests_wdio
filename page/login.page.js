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
    await super.open(`http://localhost:3000/#/login`);
    await this.closePopupBtn.click();
  }

  async loginIn(email, pass) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(pass);
    await this.loginBtn.click();
  }
}

export default new LoginPage();
