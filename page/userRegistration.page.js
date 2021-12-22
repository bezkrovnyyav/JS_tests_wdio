import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";
import Dropdown from "../elements/dropdown.js";
import Div from "../elements/div.js";

class UserRegistration extends BasePage {
  get addNewCustomerLink() {
    return new Button($("div#newCustomerLink > a.primary-link"),"add new customer button");
  }
  get inputEmailField() {
    return new Input($("input#emailControl"), "email input");
  }
  get inputPasswordField() {
    return new Input($("input#passwordControl"), "password input");
  }
  get inputReapetPasswordField() {
    return new Input($("input#repeatPasswordControl"), "repeat password input");
  }
  get dropdownSecureQuestion() {
    return new Dropdown($('[name = "securityQuestion"]'),"dropdown with security questions");
  }
  get secureAnswerQuestionField() {
    return new Input($("input#securityAnswerControl"), "security answer input");
  }
  get registrationButton() {
    return new Button($("button#registerButton"), "registration button");
  }
  get logoutButton() {
    return new Button($("#navbarLogoutButton"), "navbar logout button");
  }
  get errorMsg() {
    return new Div($("div#registration-form mat-error"),"div with error massage");
  }

  async getBaseElement() {
    return new Button(this.addNewCustomerLink, "Base element");
  }
  async addNewCustomer() {
    await allure.addStep(`Try to add new customer`)
    await (await this.getBaseElement()).waitForDisplayed();
    await this.addNewCustomerLink.click();
    await allure.endStep(`passed`);
  }
  async fillRegistrationForm(email, pass, secureAnswer, option) {
    await allure.addStep(`Fill the form with data: ${email}, ${pass}, ${secureAnswer}, ${option}`);
    await this.inputEmailField.setValue(email);
    await this.inputPasswordField.setValue(pass);
    await this.inputReapetPasswordField.setValue(pass);
    await this.dropdownSecureQuestion.select(option);
    await this.secureAnswerQuestionField.setValue(secureAnswer);
    await allure.endStep(`passed`);
  }
  async registrationButtonClick() {
    await allure.addStep(`Try to ${this.registrationButton} click`)
    await this.registrationButton.click();
    await allure.endStep(`passed`);
  }
}

export default new UserRegistration();
