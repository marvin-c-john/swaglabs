import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";


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
  await loginPage.loginAllUsers(usernames)
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
