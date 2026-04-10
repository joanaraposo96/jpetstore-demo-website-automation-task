import Login from './Login.js';

export default class Header {
    constructor(page) {
        this.page = page;
        this.signInButton = page.locator('text=Sign in');
        this.searchBar = page.locator('input[name="keyword"]');
        this.searchButton = page.locator('input[name="searchProducts"]');
    }

    async searchForProduct(productName) {
        await this.searchBar.fill(productName);
        await this.searchButton.click();
        const { default: SearchResultPage } = await import('./SearchResultPage.js');
        return new SearchResultPage(this.page, productName);
    }

    async clickSignIn() {
        await this.signInButton.click();
        return new Login(this.page);
    }
}