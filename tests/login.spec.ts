import { q, test } from 'agentq-playwright';
import { expect } from '@playwright/test';

test.describe('Login', () => {
  test('login success', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await q('user fill "username" field with "standard_user"');
  await q('user fill "password" field with "standard_user"');
  await q('User click "login" button');
  });
});