export default class BaseElement {
  constructor(wdioElement, name) {
    this.wdioElement = wdioElement;
    this.elementName = name;
  }
  async click() {
    await allure.addStep(`try to click on the ${this.elementName}`);
    console.log(`click on the element ${this.elementName}`);
    await this.wdioElement.click();
  }
  async getText() {
    await allure.addStep(`try to get text ${this.elementName}`);
    return await this.wdioElement.getText();
  }
  async getProperty(propertyName) {
    await allure.addStep(`try to get property from ${this.elementName}`);
    return await this.wdioElement.getProperty(propertyName);
  }
  async isExisting() {
    await allure.addStep(`is this ${this.elementName} existing?`);
    return await this.wdioElement.isExisting();
  }
  async isDisplayed() {
    await allure.addStep(`is ${this.elementName} displayed?`);
    return await this.wdioElement.isDisplayed();
  }
  async waitForDisplayed() {
    await allure.addStep(`wait until this ${this.elementName} to be displayed`);
    await browser.waitUntil(async () => await this.wdioElement.isClickable());
  }
}
