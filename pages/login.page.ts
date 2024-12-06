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
