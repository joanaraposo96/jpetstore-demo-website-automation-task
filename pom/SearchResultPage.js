import Header from './Header.js';

export default class SearchResultPage extends Header{
    constructor(page, productName) {
        super(page);
        this.productName = productName;
    }

    async expectFilteredResults() {
        await expect(this.page.locator('tbody tr td:nth-child(3)')).toContainText(this.productName);
    }
}