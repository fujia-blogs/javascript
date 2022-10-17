// callback for MutationObserver
function callback(records: MutationRecord[], observer: MutationObserver) {
  for (const record of records) {
    console.log('record: ', record);
  }
}

const observer = new MutationObserver(callback);

const rootElem = document.getElementById('root');

if (rootElem) {
  observer.observe(rootElem, {
    attributes: true, // observe attributes changes
    attributeOldValue: true, // to record old attributes value
    childList: true, // observe the changes of child elements
    characterData: true, // to observe the text change of target
  });
}

const newBtn = document.getElementById('new_btn');
const textIptEle = document.getElementById('child_text') as HTMLInputElement;

newBtn?.addEventListener(
  'click',
  () => {
    const textValue = textIptEle?.value;

    if (textValue) {
      const pEle = document.createElement('p');
      pEle.textContent = textValue;

      rootElem?.appendChild(pEle);

      textIptEle.value = '';
    }
  },
  false
);

// stop observing
// observer.disconnect()
