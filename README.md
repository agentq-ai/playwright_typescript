# AgentQ for Playwright

Sample integrate Playwright (typescript) with AgentQ AI.

## Installation & Usage

### Setup & run from scratch (if you need start from sample)

1. clone this repository
```bash
git clone https://github.com/agentq-ai/playwright_typescript.git
```

2. install node modules
```bash
npm install
```

3. Install AgentQ package for Playwright
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


### Setup & run from your own Playwright

1. Install AgentQ package for Playwright
```bash
npm install agentq-playwright
```

2. Create json file `agentq.config.json` based on your account profile (you must signin first)
```json
{
  "TOKEN": "apiKey"
}
```

3. Below is sample usage q() funciton (using POM)

- login.page.ts on pages file
```typescript
import { q } from 'agentq-playwright';

export class LoginPage {

  constructor(private page: any) {
  }

  async doLogin() {
    await q('User fill "username" field with "standard_user"', this.page);
    await q('User fill "password" field with "secret_sauce"', this.page);
    await q('User click "login" button', this.page);
  }
}
```

- login.spec.ts
```typescript
import { test } from "@playwright/test";
import { LoginPage } from '../pages/login.page';

test.describe('Login', () => {
  test('login success', async ({ page }) => {
    const loginpage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com');
    await loginpage.doLogin();
  });
});
```

## Plans and Rate Limits

- Free: Free of charge
- Pro & Enterprise : visit www.agentq.id
  or contact support@agentq.id to upgrade your plan.