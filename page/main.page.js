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
  get closeDialogBtn(){
    return new Button($('//a[contains(@aria-label, "dismiss cookie message")]'), "close dialog button");
  }
  async open(url) {
    await allure.addStep(`Try to open ${url}`);
    await super.open(url);
    if (await this.closePopupBtn.isExisting()) await this.closePopupBtn.click();
    if(await this.closeDialogBtn.isDisplayed()) await this.closeDialogBtn.click();
    await allure.endStep(`passed`);
  }
  async openAccountMenu() {
    await allure.addStep(`Try to click on the ${this.accountMenuBtn}`);
    await this.accountMenuBtn.click();
    await allure.endStep(`passed`);
  }
  async navigateToLogin() {
    await allure.addStep(`Try to click on the ${this.loginBtn}`);
    await this.loginBtn.click();
    await allure.endStep(`passed`);
  }
}
export default new MainPage();
