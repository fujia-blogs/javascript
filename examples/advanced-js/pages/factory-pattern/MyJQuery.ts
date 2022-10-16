export class MyJQUery {
  selector: string;
  length: number;

  constructor(selector: string) {
    const domList = Array.prototype.slice.call(
      document.querySelectorAll(selector)
    );
    const length = domList.length;

    for (let i = 0; i < length; i++) {
      // @ts-ignore
      this[i] = domList[i];
    }

    this.selector = selector;
    this.length = domList.length;
  }

  append(elem: HTMLElement): MyJQUery {
    return this;
  }

  addClass(className: string): MyJQUery {
    return this;
  }
}

// factory pattern
window.$ = (selector: string) => {
  return new MyJQUery(selector);
};
