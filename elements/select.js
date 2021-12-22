import BaseElement from "../base/baseElement.js";

export default class Select extends BaseElement {
  async selectByAttribute(attribute, value) {
    await allure.addStep(`try to select attribute from ${this.elementName}`);
    await this.wdioElement.selectByAttribute(attribute, value);
  }
}
