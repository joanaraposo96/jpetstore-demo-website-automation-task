import { test, expect } from '@playwright/test';
import { createUser } from '../test-data/userFactory.js';
import Header from '../pom/Header.js';
import Homepage from '../pom/Homepage.js';

test.describe('Petstore Search', () => {
    let header;
    let homepage;
    let login;
    let register;
    
    test.beforeEach(async ({ page }) => {
        header = new Header(page);
        homepage = new Homepage(page);
        await homepage.navigateToHomepage();
    });

    test('Register new account', async ({ page }) => {
        login = await homepage.header.clickSignIn();
        register = await login.clickRegister();
        const user = createUser();
        await register.fillRegistrationForm(user);
    });

    test('Register with invalid email', async ({ page }) => {
        login = await homepage.header.clickSignIn();
        register = await login.clickRegister();
        let invalidEmail = createUser({ email: 'invalid-email' });
        await register.fillRegistrationForm(invalidEmail);
    });
});