import { test, expect } from "@playwright/test";

test("should identify cheapest and most expensive items dynamically", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.locator("#login-button").click();

  const pricesText = await page.getByTestId("inventory-item-price").all();
  const prices: number[] = [];
  let highestPrice;
  let lowestPrice;

  for (let price of pricesText) {
    const text = await price.textContent();
    if (text !== null) {
      let priceText = text.replace(/[\$,]/g, "");
      let newPrice = parseFloat(priceText);
      prices.push(newPrice);
    }
  }

  if (prices.length > 0) {
    lowestPrice = Math.min(...prices);
    highestPrice = Math.max(...prices);
  }

  console.log(lowestPrice);
  console.log(highestPrice);

  expect(lowestPrice).toBeGreaterThan(0);
});
