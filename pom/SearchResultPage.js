import { expect } from "@playwright/test";
import Header from "./Header";

export default class SearchResultPage {
    constructor(page, productName) {
        this.page = page;
        this.header = new Header(page);
        this.productName = productName;
    }

    async expectFilteredResults() {
        const cells = this.page.locator('tbody tr td:nth-child(3)'); //targets all elements in product name column
        const count = await cells.count();
        for (let i = 0; i < count; i++) {
            await expect(cells.nth(i)).toContainText(this.productName); //asserts that each product name contains the searched keyword
        }
    }
}