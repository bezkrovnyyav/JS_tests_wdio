import BaseElement from "../base/baseElement.js";
import Button from "../elements/button.js";

export default class Dropdown extends BaseElement {
  async open() {
    await this.wdioElement.click();
  }
  async select(option) {
    await this.open();
    await new Button($(`//*[@class="mat-option-text"][contains(text(), "${option}")]`),"Question option").click();
  }
}
