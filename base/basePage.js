export default class BasePage {
  async open(url) {
    await browser.url(url);
  }
}
