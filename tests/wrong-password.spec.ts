import { test, expect } from "@playwright/test";

test("login wrong password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Username
  await page.getByPlaceholder("Username").fill("standard_user");

  //Passwort
  await page.getByPlaceholder("Password").fill("12345678");

  //login
  await page.locator("#login-button").click();

  // expect error message
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
