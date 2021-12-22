import BaseElement from "../base/baseElement.js";

export default class Input extends BaseElement {
  async setValue(value) {
    await allure.addStep(`try to set value to ${this.elementName}`);
    console.log(`Enter "${value}" into "${this.elementName}" input`);
    await this.wdioElement.setValue(value);
  }
}
