import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";
import Image from "../elements/image.js";

class UserProfile extends BasePage {
  get userProfileBtn() {
    return new Button($('//button[@role = "menuitem"][1]'),"user profile button");
  }
  get userNameInput() {
    return new Input($('//input[@id = "username"]'), "user name input");
  }
  get setUserNameBtn() {
    return new Button($('//button[@id = "submit"]'), "set user name button");
  }
  get userProfileImage(){
    return new Image($('//img[@class = "img-rounded"]'), "user profile image");
  }
  get imageUrlInput() {
    return new Input($('//input[@id = "url"]'), "image url input");
  }
  get linkImageBtn() {
    return new Button($('//button[@id = "submitUrl"]'), "link image button");
  }

  async openUserProfile() {
    await allure.addStep(`Try to click on the ${this.userProfileBtn}`);
    await this.userProfileBtn.click();
    await allure.endStep(`passed`);
  }
  async changeUserName(userName) {
    await allure.addStep(`Try to change user name to ${userName}`);
    await this.userNameInput.setValue(userName);
    await this.setUserNameBtn.click();
    await allure.endStep(`passed`);
  }
  async changeUserPhoto(avatar) {
    await allure.addStep(`Try to change user photo`)
    await this.imageUrlInput.setValue(avatar);
    await this.linkImageBtn.click();
    await allure.endStep(`passed`);
  }
}
export default new UserProfile();
