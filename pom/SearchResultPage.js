import Header from "./Header";

export default class SearchResultPage {
    constructor(page, productName) {
        this.page = page;
        this.header = new Header(page);
        this.productName = productName;
    }

    async expectFilteredResults() {
        await expect(this.page.locator('tbody tr td:nth-child(3)')).toContainText(this.productName);
    }
}