import { q } from 'agentq-playwright';
import { type Locator, type Page } from '@playwright/test';


export class LoginPage {
  readonly page: Page;
  readonly error_text: Locator;

  constructor(page: Page) {
    this.page = page;
    this.error_text = page.locator('[data-test="error"]')
  }

  async doLogin() {
    await q('User fill "username" field with "standard_user"');
    await q('User fill "password" field with "standard_user"');
    await q('User click "login" button');
  }
}
