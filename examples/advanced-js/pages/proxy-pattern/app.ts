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

// export const sayHi = (name: string) => `Hello, ${name}!`;

// const root = document.getElementById("root");

// if (root) {
//   root.innerText = sayHi("stage");
// }

const user = {
  name: 'sunny',
};

const proxy = new Proxy(user, {
  get: (target, key) => {
    console.log('getting...');
    Reflect.get(target, key);
  },
  set: (target, key, value) => {
    console.log('setting...');
    return Reflect.set(target, key, value);
  },
});

// proxy.name;
// proxy.name = 'fujia';

const userList = new WeakSet();

class User {
  constructor(public name: string) {}
}

const ProxyUser = new Proxy(User, {
  construct: (...args) => {
    const user: User = Reflect.construct(...args);
    userList.add(user);
    return user;
  },
});

const u1 = new ProxyUser('sunny');
const u2 = new ProxyUser('fujia');
const u3 = new ProxyUser('guang');

console.log(userList);
