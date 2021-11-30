describe('webdriver.io page', () => {
    it('should displate the right title', async() => {
        await browser.url('https://webdriver.io');
        await expect($('.hero__subtitle')).toHaveTextContaining( 
            'Next-gen browser and mobile automation test framework for Node.js');
    });

	it('should demonstrate the addValue command', async() => {
        await browser.url('https://webdriver.io');
        let search_btn = $('.DocSearch-Button-Placeholder');
        await search_btn.click();
        let input_field = $('.DocSearch-Input');
        await input_field.addValue('test');
        await browser.pause(2000);
        await input_field.addValue(123);
        await browser.pause(2000);
        let value = await input_field.getValue();
        await expect(value == 'test123'); // true
    });
	
	 it('should demonstrate  setValue command', async() => {
        await browser.url('https://webdriver.io');
        let search_btn = $('.DocSearch-Button-Placeholder');
        await search_btn.click();
        const input_field = $('.DocSearch-Input');
        await input_field.setValue('It is my test');
        browser.pause(2000);
        let value = await input_field.getValue();
        await expect(value == 'It is my test'); // true
    });

    it('should demonstrate the click command', async() => {
        await browser.url('https://webdriver.io');
        const blogButton = $('[href="/blog"]');
        await blogButton.click();
        const guideButton = $('.sidebarItemLink_1RT6');
        await guideButton.click();
        await browser.pause(2000);
    });
	
	it('should demonstrate the getAttribute command', async() => {
        await browser.url('https://webdriver.io');
        let search_btn = $('.DocSearch-Button-Placeholder');
        await search_btn.click();
        const input_field = $('.DocSearch-Input');
        let attr = await input_field.getAttribute('placeholder');
        console.log("Title attribute is: ", attr); // outputs: "Search docs"
    });
	
    it('should demonstrate the getText function', async() => {
        await browser.url('https://webdriver.io');
        const blogButton = await $('[href="/blog"]');
        console.log("Text for serching element is: ", blogButton.getText());
    });
});
