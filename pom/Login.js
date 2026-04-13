import { register } from 'node:module';
import Header from '../components/Header.js';
import Register from './Register.js';

export default class Login {
    constructor(page) { 
        this.page = page;
        this.header = new Header(page);
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[name="signon"]');
        this.registerButton = page.locator('text=Register Now!');
    }

    async loginWithAccount(username, password) {
        await this.passwordInput.clear();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async clickRegister() {
        this.registerButton.click();
        return new Register(this.page);
    }
}