import { error } from 'node:console';
import Cart from '../pom/Cart.js';
import Login from '../pom/Login.js';
import Category from '../pom/Category.js';
import Search from '../pom/Search.js';

export default class Header {
    constructor(page) {
        this.page = page;
        this.signInButton = page.locator('text=Sign in');
        this.searchBar = page.locator('input[name="keyword"]');
        this.searchButton = page.locator('input[name="searchProducts"]');
        this.cartButton = page.locator('a[href*="viewCart"]');
        this.categoryQuickLinks = page.locator('div[id="QuickLinks"]');
    }

    async searchForProduct(productName) {
        await this.searchBar.fill(productName);
        await this.searchButton.click();
        return new Search(this.page, productName);
    }

    async clickSignIn() {
        await this.signInButton.click();
        return new Login(this.page);
    }

    async openCart() {
        await this.cartButton.click();
        return new Cart(this.page);
    }

    async openCategoryQuickLink(category) {
        const petMap = {
            fish: 'Fish',
            dogs: 'Dogs',
            reptiles: 'Reptiles',
            cats: 'Cats',
            birds: 'Birds'
        }

        const normalizedCategory = category.toLowerCase();
        const capitalizedCategory = normalizedCategory.CharAt(0).toUpperCase() + normalizedCategory.slice(1);
        const value = petMap[normalizedCategory];

        if (!value) {
            throw new Error(`Category "${capitalizedCategory}" does not exist.`);
        }

        return new Category(this.page);
    }
}