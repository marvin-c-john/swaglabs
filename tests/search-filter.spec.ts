import { test, expect } from "@playwright/test";

test("should match product names with search query", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");

  await page.getByPlaceholder("Password").fill("secret_sauce");

  await page.getByRole("button", { name: "Login" }).click();

  await page.getByRole("combobox").selectOption("lohi");

  const items = await page.getByTestId("inventory-item-price").all();

  const prices: number[] = [];

  for (let item of items) {
    const text = await item.textContent();
    if (text !== null) {
      let priceText = text.replace(/[\$,]/g, "");
      let price: number = parseFloat(priceText);
      prices.push(price);
    }
  }
  console.log(prices);

  const expectedPrices: number[] = [7.99, 9.99, 15.99, 15.99, 29.99, 49.99];

  expect(prices).toEqual(expectedPrices);
});
