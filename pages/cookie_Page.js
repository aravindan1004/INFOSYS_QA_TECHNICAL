
const {expect} = require ("@playwright/test")

exports.Cookie_Page = class Cookie_Page{

    constructor(page) {
        //super(page)
        this.page = page;
        this.bannerTitle = "div #onetrust-policy-title";
        this.bannercheckboxes = "li.ot-cat-item input[type='checkbox']"
        this.acceptAll = "Accept all"
        this.pagenotfound = ".css-1m3hd8l img"
        this.checkboxlocatorslist = ["input[name='ot-group-id-3']", "input[name='ot-group-id-2']" , "input[name='ot-group-id-4']"];
        this.acceptAll = "Accept all"
	}

    async openurl(url) {
		await this.page.goto(url)
		await this.page.waitForLoadState('networkidle');
	}

    async verifyTitle() {
        await expect.soft(this.page).toHaveTitle("Pure progressive performance | Polestar");

	}

    //click on accept all button
    async acceptall(){
        await this.page.getByText(this.acceptAll).click();
        await this.page.waitForLoadState('networkidle');
    }

    //Verify the "Functional", "Performance" and "Targeting and Advertising" cookies check boxes in popup home and cookie setting button
    async verifycookiecheckboxes(list){
        
        let fulllist = list;

        //iterate over each cookei element
        for (let element of list){
            //filter the remaining cookie elemt other than current one
            let templist = fulllist.filter(ele => ele != element);
            let checkboxlocators = this.checkboxlocatorslist;
            //check on the current cookie check box on pop up home
            await this.page.locator('li').filter({ hasText: element }).locator('span').first().check();
            // verify the chech status on pop up home
            await expect(this.page.locator('li').filter({ hasText: element }).locator('span').first()).toBeChecked();
            //click on cookie setting button
            await this.page.getByRole("button", {name : "Cookie Settings"}).click();
            await this.page.waitForLoadState('networkidle');
            
            // verify that check boxes not checked on homepage is reflecting the same in cookie setting as well
            for (let temp of templist){
                //filterout the locator for cookie check box in cookie settings button
                let namelocator = (temp == "Functional") ? this.checkboxlocatorslist[0] : (temp == "Performance") ? this.checkboxlocatorslist[1] : this.checkboxlocatorslist[2]
                checkboxlocators = checkboxlocators.filter(elem => elem != namelocator);
                //click on the current cookie setting
                await this.page.locator(".category-menu-switch-handler").filter({hasText : temp}).click();
                await this.page.waitForLoadState('networkidle');
                // verify check status
                expect(await this.page.locator(namelocator).isChecked()).toBeFalsy();
            }
            //click on the current cookie setting
            await this.page.locator(".category-menu-switch-handler").filter({hasText : element}).click();
            await this.page.waitForLoadState('networkidle');
            //verify that cookie checked on homepage popup is checked in cookie setting as well
            expect(await this.page.locator(checkboxlocators[0]).isChecked()).toBeTruthy();
            //reload the page for fresh cookie settings
            await this.page.reload();
            await this.page.waitForLoadState('networkidle');
    
        }
    }
}