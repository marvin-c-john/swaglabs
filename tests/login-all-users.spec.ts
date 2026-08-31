import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

const usernames = [
  "standard_user",
  "locked_out_user",
  "problem_user",
  "performance_glitch_user",
  "error_user",
  "visual_user",
];

test("login all users", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  for (let user of usernames) {
    if (user !== "locked_out_user") {
      await loginPage.login(user);
      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
      // await inventoryPage.logout();
    } else {
      continue;
    }
  }
});
