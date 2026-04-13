export default class Navigation {
    constructor(page) {
        this.page = page;
        this.buttonReturnToMenu = page.locator('text=Return to Main Menu');
    }
}