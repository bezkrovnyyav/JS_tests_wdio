import BaseElement from "../base/baseElement.js";
import Button from "../elements/button.js";

export default class Dropdown extends BaseElement {
  async open() {
    await allure.addStep(`try to click on the ${this.elementName}`);
    await this.wdioElement.click();
  }
  async select(option) {
    await allure.addStep(`try to select option ${this.elementName}`);
    await this.open();
    await new Button(
      $(`//*[@class="mat-option-text"][contains(text(), "${option}")]`),
      "Question option"
    ).click();
  }
}
