export default class BaseElement {
  constructor(wdioElement, name) {
    this.wdioElement = wdioElement;
    this.elementName = name;
  }
  async click() {
    console.log(`click on the element ${this.elementName}`);
    await this.wdioElement.click();
  }
  async isExisting(){
    return await this.wdioElement.isExisting();
  }
}
