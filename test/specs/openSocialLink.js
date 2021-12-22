import mainPage from "../../page/main.page.js";
import socialPage from "../../page/social.page.js";
describe("Social media links testing", () => {
  it("should open social media link", async () => {
    await mainPage.open(`http://localhost:3000/#/`);
    await socialPage.openSideNav();
    await socialPage.openAboutUs();
    await socialPage.goToFacebook();
    //expect to have the title
    await socialPage.switchWindow(`OWASP Juice Shop - Главная | Facebook`);
  });
});
