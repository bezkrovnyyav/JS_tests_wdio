import BaseElement from "../base/baseElement.js";

export default class Input extends BaseElement {
  async setValue(value) {
    console.log(`Enter "${value}" into "${this.elementName}" input`);
    await this.wdioElement.setValue(value);
  }
}
