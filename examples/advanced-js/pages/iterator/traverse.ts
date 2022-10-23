export function* traverse(elements: Element[]): any {
  for (const elem of elements) {
    yield elem;

    const children = Array.from(elem.children);

    if (children.length) {
      yield* traverse(children);
    }
  }
}

const rootElem = document.getElementById('root');

if (rootElem) {
  for (const node of traverse([rootElem])) {
    console.log(node);
  }
}
