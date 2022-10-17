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
import './mutation-observer';

export const sayHi = (name: string) => `Hello, ${name}!`;

class Subject {
  private state = 0;
  private observers: Observer[] = [];

  getState() {
    return this.state;
  }

  setState(newState: number, id: string | number) {
    this.state = newState;

    this.notify(id, newState);
  }

  attachObserver(observer: Observer) {
    this.observers.push(observer);
  }

  private notify(id: string | number, state: number) {
    const curObserver = this.observers.filter((o) => (o.id = id))[0];

    curObserver.update(1);
  }
}

class Observer {
  constructor(public name: string, public id: number | string) {}

  update(state: number) {
    console.log(`${this.id}: ${state}`);
  }
}

const sub = new Subject();

const o1 = new Observer('fujia', '6666');
sub.attachObserver(o1);

const o2 = new Observer('sunny', '8888');
sub.attachObserver(o2);
