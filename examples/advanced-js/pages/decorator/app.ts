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

if (root) {
  root.innerText = sayHi('stage');
}

function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const cacheValue = descriptor.value;

  // redefine decorated method
  descriptor.value = function () {
    console.log('do something');
    return cacheValue.apply(this, arguments);
  };
}
