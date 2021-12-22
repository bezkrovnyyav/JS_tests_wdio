import Input from "../elements/input.js";
import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Div from "../elements/div.js";
import Select from "../elements/select.js";

class BasketPage extends BasePage {
  get searchBtn(){
    return new Button($('//button[@routerlink="/search"]'), "search button");
  }
  get addToBasketFirstItemBtn() {
    return new Button($("//mat-grid-tile[1]//button"),"first add to basket button on the page");
  }
  get addToBasketSecondItemBtn() {
    return new Button($("//mat-grid-tile[2]//button"),"second add to basket button on the page");
  }
  get addToBasketLastItemFirst(){
    return new Button($("//mat-grid-tile[4]//button"),"first last item add to basket button on the page");
  }
  get addToBasketLastItemSecond(){
    return new Button($("//mat-grid-tile[9]//button"),"second last item add to basket button on the page");
  }
  get soldOutTitleForFirstLastItem(){
    return new Div($('//mat-grid-tile[4]//div[contains(@class, "ribbon-sold")]'), 'sold out title');
  }
  get soldOutTitleForSecondtLastItem(){
    return new Div($('//mat-grid-tile[9]//div[contains(@class, "ribbon-sold")]'), 'sold out title');
  }
  get basketBtn() {
    return new Button($('//button[@routerlink = "/basket"]'), "basket button");
  }
  get removeItemBtn(){
    return new Button($('//*[@data-icon="trash-alt"]'), "remove button");
  }
  get checkOutBtn() {
    return new Button($('//button[@id = "checkoutButton"]'), "checkout button");
  }
  get addNewAddressBtn() {
    return new Button($('//button[@routerlink = "/address/create"]'),"add new address button");
  }
  get countryInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a country")]'),"country input");
  }
  get nameInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a name")]'),"name input");
  }
  get mobileNumberInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a mobile number")]'),"mobile number input");
  }
  get zipCodeInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a ZIP code")]'),"zip code input");
  }
  get addressInput() {
    return new Input($('//textarea[@id="address"]'), "address input");
  }
  get cityInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a city")]'),"city input");
  }
  get stateInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a state")]'),"state input");
  }
  get submitBtn() {
    return new Button($('//button[@id = "submitButton"]'), "submit button");
  }
  get addressRadioBtn() {
    return new Button($("//mat-radio-button/label"),"radio button for check address option");
  }
  get continuePaymentBtn() {
    return new Button($('//button[contains(@aria-label, "payment selection")]'),"continue button");
  }
  get chooseSpeedDeliveryBtn() {
    return new Button($("//mat-header-row//following-sibling::mat-row[1]//mat-radio-button","button for choose delivery speed"));
  }
  get continueDeliveryMethodBtn() {
    return new Button($('//button[@aria-label = "Proceed to delivery method selection"]'),"continue button");
  }
  get addNewCardBtn(){
    return new Button ($('//*[contains(text(), " Add a credit or debit card ")]'), "add new card button");
  }
  get cardNameInput(){
    return new Input($('//div[@role = "region"]//input[contains(@id, "mat-input")][contains(@type, "text")]'), "card name input");
  }
  get cardNumberInput(){
    return new Input($('//div[@role = "region"]//input[contains(@id, "mat-input")][contains(@type, "number")]'), "card number input");
  }
  get expiryMonthSelect(){
    return new Select($('//div[@role = "region"]//mat-form-field[3]//select'), "expiry month select");
  }
  get expiryYearSelect(){
    return new Select($('//div[@role = "region"]//mat-form-field[4]//select'), "expiry year select");
  }
  get submitNewCardBtn(){
    return new Button ($('//button[@id = "submitButton"]'), "submit new card button");
  }
  get paymentOptionRadioBtn(){
    return new Button($('//mat-table//label'), "radio button for select a card");
  }
  get continuePaymentOptionBtn(){
    return new Button($('//button[@aria-label = "Proceed to review"]'), "payment option continue button ");
  }
  get getOrderBtn(){
    return new Button($('//button[@aria-label = "Complete your purchase"]'), "get order button ");
  }
  get confirmationDiv(){
    return new Div($('//div[@class = "confirmation"]'), "div with confirm text about order");
  }
  async addToBasketItem() {
    await allure.addStep(`Try to add two items in to a basket`)
    await this.addToBasketFirstItemBtn.click();
    await this.addToBasketSecondItemBtn.click();
    await allure.endStep(`passed`);
  }
  async addToBasketLastItems(){
    await allure.addStep(`Try to add two last items in to a basket`)
    await this.addToBasketLastItemFirst.click();
    await this.addToBasketLastItemSecond.click();
    await allure.endStep(`passed`);
  }
  async goToBasket() {
    await allure.addStep(`Try to open a basket`)
    await this.basketBtn.click();
    await allure.endStep(`passed`);
  }
  async removeItemFromBasket(){
    await allure.addStep(`Try to remove item from basket`)
    await this.removeItemBtn.click();
    await allure.endStep(`passed`);
  }
  async clickToCheckOutButton() {
    await allure.addStep(`Try to click checkout button`)
    await this.checkOutBtn.waitForDisplayed();
    await this.checkOutBtn.click();
    await allure.endStep(`passed`);
  }
  async clickAddNewAddressButton() {
    await allure.addStep(`Try to click add new address button`)
    await this.addNewAddressBtn.waitForDisplayed();
    await this.addNewAddressBtn.click();
    await allure.endStep(`passed`);
  }
  async addNewAddressFillForm(country,name,mobileNumber,zipCode,address,city,state) {
    await allure.addStep(`Try to fill form for add new address`)
    await this.countryInput.setValue(country);
    await this.nameInput.setValue(name);
    await this.mobileNumberInput.setValue(mobileNumber);
    await this.zipCodeInput.setValue(zipCode);
    await this.addressInput.setValue(address);
    await this.cityInput.setValue(city);
    await this.stateInput.setValue(state);
    await this.submitBtn.waitForDisplayed();
    await this.submitBtn.click();
    await this.addressRadioBtn.click();
    await this.continuePaymentBtn.waitForDisplayed();
    await this.continuePaymentBtn.click();
    await allure.endStep(`passed`);
  }
  async chooseDeliverySpeed() {
    await allure.addStep(`Try to choose speed delivery option`)
    await this.chooseSpeedDeliveryBtn.click();
    await this.continueDeliveryMethodBtn.waitForDisplayed();
    await this.continueDeliveryMethodBtn.isClickable();
    await this.continueDeliveryMethodBtn.click();
    await allure.endStep(`passed`);
  }
  async addNewCard(cardName, cardNumber){
    await allure.addStep(`Try to add new card`)
    await this.addNewCardBtn.click();
    await this.cardNameInput.setValue(cardName);
    await this.cardNumberInput.setValue(cardNumber);
    await this.expiryMonthSelect.selectByAttribute("value", "7");
    await this.expiryYearSelect.selectByAttribute("value", "2080");
    await this.submitNewCardBtn.click();
    await this.paymentOptionRadioBtn.click();
    await this.continuePaymentOptionBtn.click();
    await allure.endStep(`passed`);
  }
  async getOrderSummary(){
    await allure.addStep(`Try to get order`)
    await this.getOrderBtn.click();
    await allure.endStep(`passed`);
  }
  async goToMainPage(){
    await allure.addStep(`Try to check that last item status is a SOLD OUT`)
    await browser.pause(2000);
    await this.searchBtn.waitForDisplayed();
    await this.searchBtn.isClickable();
    await this.searchBtn.click();
    await allure.endStep(`passed`);
  }
}
export default new BasketPage();
