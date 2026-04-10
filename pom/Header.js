export default class Header {
    constructor(page) {
        this.page = page;
        this.searchBar = page.getByRole('textbox');
        this.searchButton = page.getByRole('button', { name: 'Search' });
    }

    async searchForProduct(productName) {
        await this.searchBar.fill(productName);
        await this.searchButton.click();
        const { default: SearchResultPage } = await import('./SearchResultPage.js');
        return new SearchResultPage(this.page, productName);
    }
}