import { expect, type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly menu: Locator;
  readonly logoutButton: Locator;
  readonly dropdownMenu: Locator;
  readonly items: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menu = page.getByRole("button", { name: "Open Menu" });
    this.logoutButton = page.getByRole("link", { name: "Logout" });
    this.dropdownMenu = page.getByRole("combobox");
    this.items = page.getByTestId("inventory-item-price");
  }

  async logout() {
    await this.menu.click();
    await this.logoutButton.click();
  }

  async getPrices() {
    const prices: number[] = [];
    const items = await this.getAllItems();

    for (let item of items) {
      const text = await item.textContent();
      if (text !== null) {
        let priceText = text.replace(/[\$,]/g, "");
        let price: number = parseFloat(priceText);
        prices.push(price);
      }
    }
    return prices;
  }

  async getAllItems(){
    return await this.items.all()
  }
}
