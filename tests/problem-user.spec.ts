import { test, expect } from "@playwright/test";

test("should detect visual or functional broken state for problem_user", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("problem_user");

  await page.getByPlaceholder("Password").fill("secret_sauce");

  await page.getByRole("button", { name: "Login" }).click();

  await page.getByTestId("add-to-cart-sauce-labs-bike-light").click();
  await page.getByTestId("add-to-cart-sauce-labs-bolt-t-shirt").click();
  await page.getByTestId("add-to-cart-sauce-labs-fleece-jacket").click();

  await expect(page.getByTestId("shopping-cart-badge")).not.toHaveText("3");
});
