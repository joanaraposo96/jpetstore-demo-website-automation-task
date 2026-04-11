import Header from "./Header";

export default class Register {
    constructor(page) {
        this.page = page;
        this.header = new Header(page);
        this.userID = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.repeatPassword = page.locator('input[name="repeatedPassword"]');
        this.firstName = page.locator('input[name="account.firstName"]');
        this.lastName = page.locator('input[name="account.lastName"]');
        this.email = page.locator('input[name="account.email"]');
        this.phone = page.locator('input[name="account.phone"]');
        this.address1 = page.locator('input[name="account.address1"]');
        this.address2 = page.locator('input[name="account.address2"]');
        this.city = page.locator('input[name="account.city"]');
        this.state = page.locator('input[name="account.state"]');
        this.zip = page.locator('input[name="account.zip"]');
        this.country = page.locator('input[name="account.country"]');
        this.languageCombobox = page.locator('select[name="account.languagePreference"]');
        this.categoryCombobox = page.locator('select[name="account.favouriteCategoryId"]');
        this.myList = page.locator('input[name="account.favouriteCategoryId"]');
        this.myBanner = page.locator('input[name="account.listOption"]');
        this.saveAccountButton = page.locator('input[name="newAccount"]');
    }

    async fillRegistrationForm(user) {
        await this.userID.fill(user.username);
        await this.password.fill(user.password);
        await this.repeatPassword.fill(user.password);
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.email.fill(user.email);
        await this.phone.fill(user.phone);
        await this.address1.fill(user.address1);
        await this.address2.fill(user.address2);
        await this.city.fill(user.city);
        await this.state.fill(user.state);
        await this.zip.fill(user.zip);
        await this.country.fill(user.country);
    }
}