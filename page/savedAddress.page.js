import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import basketPage from "./basket.page.js";

class RecyclePage extends BasePage {
    get ordersPaymentBtn(){
        return new Button ($('//button[@aria-label = "Show Orders and Payment Menu"]'), "orders & payment button");
    }
    get mySavedAddressBtn(){
        return new Button($('//button[@routerlink="/address/saved"]'), "my saved adress button");
    }
    get submitBtn() {
        return new Button($('//button[@id = "submitButton"]'), "submit button");
      }
    async navigateToSavedAddress(){
        await allure.addStep(`Try to go saved address page`)
        await this.ordersPaymentBtn.click();
        await this.mySavedAddressBtn.click();
        await allure.endStep(`passed`);
    }
    async addNewAddressFillForm(country,name,mobileNumber,zipCode,address,city) {
        await allure.addStep(`Try to fill form for new address`)
        await basketPage.countryInput.setValue(country);
        await basketPage.nameInput.setValue(name);
        await basketPage.mobileNumberInput.setValue(mobileNumber);
        await basketPage.zipCodeInput.setValue(zipCode);
        await basketPage.addressInput.setValue(address);
        await basketPage.cityInput.setValue(city);
        await this.submitBtn.isClickable();
        await allure.endStep(`passed`);
    }
}

export default new RecyclePage();