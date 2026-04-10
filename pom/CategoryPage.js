import { expect } from "@playwright/test";
import Homepage from "./Homepage.js";

export default class CategoryPage extends Homepage {
    constructor(page, category) {
        super(page);
        this.category = category;
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