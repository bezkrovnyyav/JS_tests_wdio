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
    await super.open(`http://localhost:3000/#/`);
    if (await this.closePopupBtn.isExisting()) await this.closePopupBtn.click();
  }
  async openAccountMenu() {
    await this.accountMenuBtn.click();
  }
  async navigateToLogin() {
    await this.loginBtn.click();
  }
}
export default new MainPage();
