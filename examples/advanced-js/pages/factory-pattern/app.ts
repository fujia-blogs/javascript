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

const root = document.getElementById('root');

class Product {
  // the target should be "es6" or above
  static #privateProperty = 3;
  constructor(public name: string) {}

  fn1() {
    alert(Product.#privateProperty);
  }
}

class Creator {
  create(name: string): Product {
    return new Product(name);
  }
}

const creator = new Creator();

const p1 = creator.create('p1');
const p2 = creator.create('p2');

interface IPeople {
  name: string;
  age: number;
  speak: VoidFunction;
}

class Student implements IPeople {
  constructor(public name: string, public age: number) {}

  speak() {}
}

class Teacher implements IPeople {
  constructor(public name: string, public age: number) {}

  speak() {}
}

class StudentCreator {
  create(name: string, age: number): IPeople {
    return new Student(name, age);
  }
}

class TeacherCreator {
  create(name: string, age: number): IPeople {
    return new Teacher(name, age);
  }
}
