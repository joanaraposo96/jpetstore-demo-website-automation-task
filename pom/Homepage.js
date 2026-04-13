import Header from '../components/Header.js';
import Category from './Category.js';

export default class Homepage {
    constructor(page) {
        this.page = page;
        this.header = new Header(page);
        this.fishCategory = page.locator('div[id=SidebarContent] a[href*="FISH"]');
        this.dogsCategory = page.locator('div[id=SidebarContent] a[href*="DOGS"]');
        this.reptilesCategory = page.locator('div[id=SidebarContent] a[href*="REPTILES"]');
        this.catsCategory = page.locator('div[id=SidebarContent] a[href*="CATS"]');
        this.birdsCategory = page.locator('div[id=SidebarContent] a[href*="BIRDS"]');
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
        return new Category(this.page, category);
    }
}