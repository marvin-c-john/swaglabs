import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("login wrong password", async ({ page }) => {
  
  const loginPage = new LoginPage(page)

  await loginPage.loginPassword('standard_user', '12345678')

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
