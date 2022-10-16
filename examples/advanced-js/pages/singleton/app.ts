/**
 * NOTE:
 *
 * If you want to auto fresh the page when you modified the .html file, just cancel following comment.
 *
 * Most of the time, we don't need it. Please ignore it.
 */
// if (process.env.NODE_ENV !== 'production') {
//   require('./index.html');
// }

export const sayHi = (name: string) => `Hello, ${name}!`;

const root = document.getElementById('root');

// if (root) {
//   root.innerText = sayHi("stage");
// }

class LoginModal {
  private static instance: LoginModal | null = null;

  private constructor(public name: string) {}

  static create(name: string): LoginModal {
    if (!this.instance) {
      return (this.instance = new LoginModal(name));
    }

    return this.instance;
  }
}

LoginModal.create('');

// new LoginModal()
