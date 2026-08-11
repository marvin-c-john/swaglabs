import { test, expect } from "@playwright/test";

const usernames: string[] = [];
usernames.push(
  "standard_user",
  "locked_out_user",
  "problem_user",
  "performance_glitch_user",
  "error_user",
  "visual_user",
);

test("login all users", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  for (let user of usernames) {
    if (user !== "locked_out_user") {
      await page.getByPlaceholder("Username").fill(user);

      await page.getByPlaceholder("Password").fill("secret_sauce");

      await page.locator("#login-button").click();

      await page.locator("#react-burger-menu-btn").click();
      await page.locator("#logout_sidebar_link").click();
    } else {
      continue;
    }
  }
});
