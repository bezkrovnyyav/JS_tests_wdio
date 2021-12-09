import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";

class spcialPage extends BasePage {
  get sideNavBtn() {
    return new Button($('button[aria-label="Open Sidenav"]'), "sideNav button");
  }
  get aboutUsBtn() {
    return new Button($("a[routerlink = '/about']"), "about us button");
  }
  get facebookBtn() {
    return new Button(
      $('a[href*="https://www.facebook.com/"]'),
      "facebook button"
    );
  }
  async openSideNav() {
    await this.sideNavBtn.click();
  }
  async openAboutUs() {
    await browser.waitUntil(() => this.aboutUsBtn.isClickable());
    await this.aboutUsBtn.click();
  }
  async goToFacebook() {
    await this.facebookBtn.click();
  }
  async switchWindow(windowTitle) {
    let currentWindow = await browser.getWindowHandle();
    for (let handle of await browser.getWindowHandles()) {
      await browser.switchToWindow(handle);
      if ((await browser.getTitle()) === windowTitle) {
        return true;
      }
    }
    await browser.switchToWindow(currentWindow);
    throw new Error(`Window with title "${windowTitle}" was not found`);
  }
}

export default new spcialPage();
