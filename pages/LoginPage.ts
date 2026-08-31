import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByRole('textbox', { name: 'Username'});
    this.password =  page.getByRole('textbox', { name: 'Password'})
    this.loginButton = page.getByRole('button', { name: 'Login'});
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username: string){
    await this.goto();
    await this.username.fill(username)
    await this.password.fill('secret_sauce')
    await this.loginButton.click();
  }

 
}
