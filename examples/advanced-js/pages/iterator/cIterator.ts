interface IteratorRes {
  value: number | undefined;
  done: boolean;
}

class CIterator {
  private length = 3;
  private index = 0;

  next(): IteratorRes {
    this.index++;

    if (this.index <= this.length) {
      return {
        value: this.index,
        done: false,
      };
    }

    return {
      value: undefined,
      done: true,
    };
  }

  [Symbol.iterator]() {
    return this;
  }
}
