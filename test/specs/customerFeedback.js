import contactPage from "../../page/contact.page.js";
import mainPage from "../../page/main.page.js";
import socialPage from "../../page/social.page.js";

describe("Customer feedback", () => {
  it("should to add customer feedback with rating 3", async () => {
    await mainPage.open(`http://localhost:3000/#/`);
    await socialPage.openSideNav();
    await contactPage.openFeedback();
    await contactPage.writeComment("hello");
    await contactPage.setRating({ x: 10, y: 0 }, 1);
    await contactPage.getCaptchResult();
    await contactPage.clickSubmit();
    await expect(contactPage.thankYouForFeedback).toBeDisplayed();
  });
});
