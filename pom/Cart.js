import Header from "../components/Header";

export default class Cart {
    constructor(page) {
        this.page = page;
        this.header = new Header(page);
        this.emptyCartMessage = page.locator('text=You cart is empty.')
    }

    async expectEmptyCartMessage() {
        await this.emptyCartMessage.toBeVisible();
    }
}