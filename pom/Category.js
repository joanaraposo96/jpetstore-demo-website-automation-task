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
        const links = this.page.locator('tbody tr td a');
        const linkCount = await links.count();
        const randomIndex = Math.floor(Math.random() * linkCount);
        await links.nth(randomIndex).click();
        return new Product(this.page, name)
    }

    async addToCart() {
        await this.buttonAddToCart.first().click();
        return new Cart(this.page);
    }
}