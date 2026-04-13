import Header from "../components/Header";

export default class Product {
    constructor(page, name) {
        this.page = page;
        this.header = new Header(page);
        this.name = name;
    }

    async verifyProductHeader() {
        await expect(this.page.locator(`h2:has-text("${this.name}")`)).toBeVisible();
    }
}