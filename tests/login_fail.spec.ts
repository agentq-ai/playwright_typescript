import { test } from "agentq-playwright";
import { expect } from "@playwright/test";
import { LoginPage } from '../pages/login.page';

test.describe('Login', () => {
  test('login failed', async ({ page }) => {
    const loginpage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com');
    await loginpage.doLogin();
    await expect(loginpage.error_text).toBeVisible();
  });
});