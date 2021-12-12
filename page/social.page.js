
import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Image from "../elements/image.js";

class spcialPage extends BasePage {
  get sideNavBtn() {
    return new Button($('button[aria-label="Open Sidenav"]'), "sideNav button");
  }
  get aboutUsBtn() {
    return new Button($("a[routerlink = '/about']"), "about us button");
  }
  get facebookBtn() {
    return new Button($('a[href*="https://www.facebook.com/"]'),"facebook button");
  }
  get facebookLogoImage(){
    return new Image($('//i[contains(@class, "logo")]'), "facebook logo image");
  }
  async getBaseElement() {
    return new Button(this.aboutUsBtn, "Base element");
  }
  async openSideNav() {
    await allure.addStep(`Try to open side navigation menu`);
    await this.sideNavBtn.click();
    await allure.endStep(`passed`);
  }
  async openAboutUs() {
    await allure.addStep(`Try to open 'About us' page`);
    await (await this.getBaseElement()).isClickable();
    await this.aboutUsBtn.click();
    await allure.endStep(`passed`);
  }
  async goToFacebook() {
    await allure.addStep(`Try to click on the ${this.facebookBtn} to open facebook`);
    const btn = await $('a[href*="https://www.facebook.com/"]');
    await btn.scrollIntoView();
    await browser.pause(2000);
    await this.facebookBtn.click();
    await allure.endStep(`passed`);
  }
  async switchToWindow() {
    await allure.addStep(`Try to swith to another window in browser`)
    await browser.pause(6000);
    await browser.switchWindow('https://www.facebook.com/owasp.juiceshop');
    await browser.pause(2000);
    await allure.endStep(`passed`);
  }
}

export default new spcialPage();