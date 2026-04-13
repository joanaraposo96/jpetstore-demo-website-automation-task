import { test, expect } from '@playwright/test';
import { createUser } from '../test-data/userTemplate.js';
import Header from '../components/Header.js';
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
        const newUser = createUser();
        await register.fillRegistrationForm(newUser);
    });

    test('Register already existing account', async ({ page }) => {
        login = await homepage.header.clickSignIn();
        register = await login.clickRegister();
        const newUser = createUser();
        await register.fillRegistrationForm(newUser);
        const loginAgain = await homepage.header.clickSignIn();
        const registerAgain = await loginAgain.clickRegister();
        await registerAgain.fillRegistrationForm(newUser);
    });

    test('Register with invalid email', async ({ page }) => {
        login = await homepage.header.clickSignIn();
        register = await login.clickRegister();
        const invalidEmail = createUser({ email: 'invalid-email' });
        await register.fillRegistrationForm(invalidEmail);
    });
});