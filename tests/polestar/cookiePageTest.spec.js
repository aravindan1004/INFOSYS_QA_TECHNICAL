const { test, expect} = require('@playwright/test')
const{ Cookie_Page } = require('../../pages/cookie_Page')

const url = "https://www.polestar.com/global/developer/get-started/";
const cookieelements = ["Functional", "Performance", "Targeting and Advertising"];

test("Test home page cookie pop up screen", async ({ page }) => {

    const cookie = new Cookie_Page(page);
    await cookie.openurl(url);
    await cookie.verifyTitle();
    await cookie.verifybannerTitle();
    await cookie.verifycookiecheckboxes(cookieelements);
    await cookie.acceptall()

});
