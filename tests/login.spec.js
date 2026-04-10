import { test, expect } from '@playwright/test';
import Header from '../pom/Header.js';
import Homepage from '../pom/Homepage.js';

test.describe('Petstore Search', () => {
    let header;
    let homepage;
    let login;
    
    test.beforeEach(async ({ page }) => {
        header = new Header(page);
        homepage = new Homepage(page);
        await homepage.navigateToHomepage();
    });

    test('Login with valid data', async ({ page }) => {
        login = await homepage.header.clickSignIn();
        await login.loginWithAccount('user96', 'test123');
    });
});