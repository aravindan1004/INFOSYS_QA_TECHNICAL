const base = require('@playwright/test');
const Cookie_Page = require('../pages/cookie_Page');

const test = base.test.extend({
    cookiepage: async ({ page }, use) => {
        await use(new Cookie_Page(page));
    }
}); 

module.exports = test;
exports.expect = base.expect;