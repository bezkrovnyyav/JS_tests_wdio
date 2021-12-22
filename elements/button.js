import BaseElement from "../base/baseElement.js";

export default class Button extends BaseElement {
  async isClickable() {
    await allure.addStep(`is ${this.elementName} clickable?`);
    return await this.wdioElement.isClickable();
  }
}
