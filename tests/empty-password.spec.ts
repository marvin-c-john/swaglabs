import { test, expect } from "@playwright/test";

test("login empty password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Username
  await page.getByPlaceholder("Username").fill("standard_user");

  //Passwort
  await page.getByPlaceholder("Password").fill("");

  //login
  await page.getByRole("button", { name: "Login" }).click();

  // expect error message
  await expect(
    page.getByRole("heading", { name: "Epic sadface: Password is required" }),
  ).toBeVisible();
});
