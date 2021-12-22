export default class BasePage {
  async open(url) {
    await allure.addStep(`open ${this.elementName}`);
    await browser.url(url);
  }
}
