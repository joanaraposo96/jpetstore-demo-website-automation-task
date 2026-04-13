import { expect } from "@playwright/test";
import Header from "../components/Header";
import Cart from "./Cart";
import Product from "./Product";

export default class Category {
    constructor(page, category) {
        this.page = page;
        this.category = category;
        this.header = new Header(page);
        this.buttonAddToCart = page.locator('text=Add to Cart');
    }

    async verifyCategoryHeader(){
        await expect(this.page.locator(`h2:has-text("${this.category}")`)).toBeVisible();
    }

    async openProduct() {
        const rows = this.page.locator('tbody tr');
        const count = await rows.count();

        const randomIndex =  Math.floor(Math.random() * (count - 1)) + 1; // Counts how many usable rows there are and skips header
        const selectedRow = rows.nth(randomIndex);

        const name = await selectedRow.locator('td').nth(1).textContent(); // Get the 2nd column (name) from the selected row
        await selectedRow.locator('td').nth(0).click(); // Opens product page by clicking on the 1st column (id) from the selected row
        return new Product(this.page, name);
    }

    async addToCart() {
        await this.buttonAddToCart.first().click();
        return new Cart(this.page);
    }
}