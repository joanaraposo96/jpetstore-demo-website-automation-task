import { expect } from "@playwright/test";
import Header from "./Header";

export default class CategoryPage {
    constructor(page, category) {
        this.page = page;
        this.category = category;
        this.header = new Header(page);
    }

    async expectCategoryHeaderToBeVisible() {
        await expect(this.page.locator(`h2:has-text("${this.category}")`)).toBeVisible();
    }

    async openProduct() {
        const links = this.page.locator('tbody tr td a');
        const linkCount = await links.count();
        const randomIndex = Math.floor(Math.random() * linkCount);
        await links.nth(randomIndex).click();
    }
}