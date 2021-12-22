import BaseElement from "../base/baseElement.js";

export default class Slider extends BaseElement {
  async setRating(target, duration) {
    await allure.addStep(`try to move ${this.elementName}`);
    return await this.wdioElement.dragAndDrop(target, duration);
  }
}
