import { test, expect } from '@playwright/test';
import Header from '../pom/Header.js';
import Homepage from '../pom/Homepage.js';

test.describe('Petstore Search', () => {
    let header; // variable declared outside of beforeEach, so it can be used in all tests within this describe block.
    let homepage;
    let category;
    let searchResult;
    
    test.beforeEach(async ({ page }) => {
        header = new Header(page); // vs. let header -> local variable, this means it would not be accessible in other tests, so we need to declare it outside of beforeEach.
        homepage = new Homepage(page);
        await homepage.navigateToHomepage();
    });

    test('Search for a product by category', async ({ page }) => {
        category = await homepage.openCategory('Fish');
        await category.verifyCategoryHeader();
    });

    test('Search for a product by name', async ({ page }) => {
        searchResult = await header.searchForProduct('e');
        await searchResult.expectFilteredResults();
    });
});