import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";
import Dropdown from "../elements/dropdown.js";

class UserRegistration extends BasePage {
  get addNewCustomerLink() {
    return new Button(
      $(" a.primary-link"),
      "add new customer button"
    );
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
    return new Dropdown(
      $('[name = "securityQuestion"]'),
      "dropdown with security questions"
    );
  }
  get secureAnswerQuestionField() {
    return new Input($("input#securityAnswerControl"), "security answer input");
  }
  get registrationButton() {
    return new Button($("button#registerButton"), "registration button");
  }

  async addNewCustomer() {
    await allure.addStep(`Button for new costomeris visible`);
    await browser.waitUntil(
      async () => await this.addNewCustomerLink.isClickable()
    );
    await allure.endStep(`passed`);
  }

  async fillRegistrationForm(email, pass, secureAnswer, option) {
    await allure.addStep(`Try to fill the registration form`);
    await this.inputEmailField.setValue(email);
    await this.inputPasswordField.setValue(pass);
    await this.inputReapetPasswordField.setValue(pass);
    await this.dropdownSecureQuestion.select(option);
    await this.secureAnswerQuestionField.setValue(secureAnswer);
    await allure.endStep(`passed`);
  }
  async registrationButtonClick() {
    await allure.addStep(`Try to click registration button`);
    await this.registrationButton.click();
    await allure.endStep(`passed`);

  }
}

export default new UserRegistration();
