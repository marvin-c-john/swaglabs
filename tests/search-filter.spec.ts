import { test, expect } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { LoginPage } from "../pages/LoginPage";

test("should match product names with search query", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  const expectedPrices: number[] = [7.99, 9.99, 15.99, 15.99, 29.99, 49.99];

  await loginPage.login("standard_user");
  await inventoryPage.dropdownMenu.selectOption("lohi");

  const items = await inventoryPage.items.all();

  const prices = await inventoryPage.getPrices();

  expect(prices).toEqual(expectedPrices);

});
