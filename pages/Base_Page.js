const { expect } = require ('@playwright/test');

class Base_Page{

    constructor(page){
        this.page = page;
	}

	async open(url) {
		await this.page.goto(url)
	}

	async getUrl() {
		return this.page.url()
	}

    //Wait for the Page to Load
	async waitForPageLoad() {
		const isVisible = await this.page.waitForSelector(homePageImage, {
			visible: true
		})
		return isVisible
	}

	//wait and find a specific element with it's Selector and return Visible
	async isElementVisible(selector) {
		let isVisible = true
		await this.page.waitForSelector(selector, { visible: true }).catch(() => {
			isVisible = false
		})
		return isVisible
	}

	// wait and type for the element
	async waitAndType(Selector, text) {
		await this.page.waitForSelector(Selector)
		await this.page.click(Selector, { clickCount: 3 })
		await this.page.keyboard.press('Backspace')
		await this.page.type(Selector, text)
	}

	// wait and click the element
	async waitAndClick(Selector) {
		await this.page.waitForSelector(Selector)
		return this.page.click(Selector)
	}

	// Get text of the element
	async getText(Selector) {
		await this.page.waitForSelector(Selector)
		const text = await this.page.$eval(Selector, element => element.innerHTML)
		return text
	}

	// Get Count of the elements
	async getCount(Selector) {
		await this.page.waitForSelector(Selector)
		const count = await this.page.$$eval(Selector, elements => elements.length)
		return count
	}
    
}

module.exports = Base_Page