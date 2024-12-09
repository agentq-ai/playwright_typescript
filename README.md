# AgentQ for Playwright

Sample integrate Playwright (typescript) with AgentQ AI.

## Installation & Usage
<br />

### Setup & run from scratch (if you need start from sample)

1. clone this repository
```bash
git clone https://github.com/agentq-ai/playwright_typescript.git
```

2. install node modules 
```bash
npm install
```

3. Install AgentQ package for Playwright using npm (applicable using yarn as well)
```bash
npm install agentq-playwright
```

4. Update apiKey on json file `agentq.config.json` based on your account profile (you must signin first)
```bash
export TOKEN="apiKey"
```

5. Run your test
```bash
npm run test
```
or
```bash
npx playwright test
```
<br />

### Setup & run from your own Playwright

1. Install AgentQ package for Playwright using npm (applicable using yarn as well)
```bash
npm install agentq-playwright
```

2. Create json file `agentq.config.json` based on your account profile (you must signin first)
```json
{
  "TOKEN": "apiKey"
}
```

3. Below is sample usage q() funciton (using POM and non-POM)

#### non-POM

- login.spec.ts
```typescript
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
```


#### POM

- login.page.ts on pages file
```typescript
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
```

- login_fail.spec.ts
```typescript
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
```
<br />

## Plans and Rate Limits

- Free: Free of charge
- Pro & Enterprise : visit www.agentq.id
  or contact support@agentq.id to upgrade your plan.