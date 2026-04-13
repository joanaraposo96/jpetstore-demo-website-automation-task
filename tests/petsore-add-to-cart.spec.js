import { test, expect } from '@playwright/test';
import Header from '../components/Header.js';
import Homepage from '../pom/Homepage.js';
import CategoryPage from '../pom/Category.js';

test.describe('Add products to cart and check-out', () => {
    let header;
    let homepage;
    let category;
    let cart;
    
    test.beforeEach(async ({ page }) => {
        homepage = new Homepage(page);
        await homepage.navigateToHomepage();
    });

    test('Add product to an empty cart', async ({ page }) => {
        header = new Header(page);
        cart = await header.openCart();
        await cart.expectEmptyCartMessage();
        category = await header.openCategoryQuickLink('dogs');
        await category.openProduct();
    });
});