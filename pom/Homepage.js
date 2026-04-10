import Header from '..Header.js';

export default class Homepage extends Header {
    constructor(page) {
        super(page);
        this.fishCategory = page.locator('div[id=sidebar] a[href*="FISH"]');
        this.dogsCategory = page.locator('div[id=sidebar] a[href*="DOGS"]');
        this.reptilesCategory = page.locator('div[id=sidebar] a[href*="REPTILES"]');
        this.catsCategory = page.locator('div[id=sidebar] a[href*="CATS"]');
        this.birdsCategory = page.locator('div[id=sidebar] a[href*="BIRDS"]');
    }

    async navigateToHomepage() {
        await this.page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    }

    async openCategory(category) {
        const categories = {
            fish: this.fishCategory,
            dogs: this.dogsCategory,
            reptiles: this.reptilesCategory,
            cats: this.catsCategory,
            birds: this.birdsCategory
        };
        
        const lowerCategory = category.toLowerCase();
        if (!categories[lowerCategory]) {
            const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
            throw new Error(`Category "${capitalizedCategory}" not found.`);
        }

        await categories[lowerCategory].click();
        const { default: CategoryPage } = await import('./CategoryPage.js');
        return new CategoryPage(this.page, category);
    }
}