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

class DataIterator {
  private data: number[];
  private index = 0;

  constructor(container: DataContainer) {
    this.data = container.data;
  }

  next() {
    let value = null;

    if (this.hasNext()) {
      value = this.data[this.index];
      this.index++;
    }
    return value;
  }

  hasNext() {
    return this.index <= this.data.length - 1;
  }
}

class DataContainer {
  constructor(public data = [10, 20, 30, 40, 50]) {}

  getIterator() {
    return new DataIterator(this);
  }
}

const container = new DataContainer();

const iterator = container.getIterator();

while (iterator.hasNext()) {
  const num = iterator.next();

  console.log(num);
}
