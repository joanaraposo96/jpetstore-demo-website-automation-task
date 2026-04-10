import { test, expect } from '@playwright/test';
import Header from '../pom/Header.js';
import Homepage from '../pom/Homepage.js';

test.describe('Petstore Search', () => {
    let header;
    let homepage;
    let category;
    let searchResult;
    
    test.beforeEach(async ({ page }) => {
        header = new Header(page);
        homepage = new Homepage(page);
        await homepage.navigateToHomepage();
    });

    test('Search for a product by category', async ({ page }) => {
        category = await homepage.openCategory('Fish');
        await category.expectCategoryHeaderToBeVisible();
    });

    test('Search for a product by name', async ({ page }) => {
        searchResult = await header.searchForProduct('e');
        await searchResult.expectFilteredResults();
    });
});