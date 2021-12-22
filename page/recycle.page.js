import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";

class RecyclePage extends BasePage {
  get ordersPaymentBtn() {
    return new Button($('//button[@aria-label = "Show Orders and Payment Menu"]'), "orders & payment button");
  }
  get mySavedAddressBtn() {
    return new Button($('//button[@routerlink="/address/saved"]'),"my saved adress button");
  }
  get recycleBtn() {
    return new Button($('//button[@routerlink = "/recycle"]'),"recylce button");
  }
  get quantityInput() {
    return new Input($('//input[@data-placeholder = "...in liters"]'),"input for set quantity");
  }
  get addressOptionRadioBtn() {
    return new Button($("//app-address//mat-radio-button"),"address option radio button");
  }
  get submitBtn() {
    return new Button($('//button[@id = "recycleButton"]'), "submit button");
  }
  async navigateToRecycle() {
    await allure.addStep(`Try to go recycle page`);
    await this.ordersPaymentBtn.click();
    await this.recycleBtn.click();
    await allure.endStep(`passed`);
  }
  async setInfo(value) {
    await allure.addStep(`Try to set quantity and check address radio button`);
    await this.quantityInput.setValue(value);
    await this.addressOptionRadioBtn.click();
    await allure.endStep(`passed`);
  }
}

export default new RecyclePage();
