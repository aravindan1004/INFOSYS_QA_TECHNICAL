const { test, expect} = require('@playwright/test')
const{ Cookie_Page } = require('../../pages/cookie_Page')


test.skip("Not Yet Implemented - Test Get started page", async ({ page }) => {

    const cookie = new Cookie_Page(page);
    await cookie.openurl(url);
    await cookie.acceptall();

});