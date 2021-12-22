import mainPage from "../../page/main.page.js";
import loginPage from "../../page/login.page.js";
import basketPage from "../../page/basket.page.js";
import { Chance } from "chance";

let chance = new Chance();
let country = chance.country({ full: true });
let name = chance.first();
let mobileNumber = chance.phone({country: "fr",mobile: true,formated: false,});
let zipCode = chance.zip();
let address = chance.address();
let city = chance.city();
let state = chance.state();
let cardName = chance.word({ length: 5 });
let cardNumber = chance.cc({type: 'Mastercard'});

describe("Purchase flow", () => {
  it("Add/remove items to the basket and complete purchase flow", async () => {
    await loginPage.open(`http://localhost:3000/#/login`);
    await loginPage.loginIn("user11@test.com", "test123");
    await mainPage.open(`http://localhost:3000/#/`);
    await basketPage.addToBasketItem();
    await basketPage.goToBasket();
    await basketPage.removeItemFromBasket();
    await basketPage.clickToCheckOutButton();
    await basketPage.clickAddNewAddressButton();
    await basketPage.addNewAddressFillForm(country,name,mobileNumber,zipCode,address,city,state);
    await basketPage.chooseDeliverySpeed();
    await basketPage.addNewCard(cardName, cardNumber);
    await basketPage.getOrderSummary();
    await expect(basketPage.confirmationDiv).toBeDisplayed();
  });
});