import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Username
  await page.getByPlaceholder("Username").fill("standard_user");

  //Passwort
  await page.getByPlaceholder("Password").fill("secret_sauce");

  //login
  await page.locator("#login-button").click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
