import { isEscapeKey } from './util.js';

const stack = [];
let listener = null;

const onDocumentEscape = (evt) => {
  if (isEscapeKey(evt)) {
    const index = stack.length - 1;
    if(stack[index].conditionFn && !stack[index].conditionFn()){
      return;
    }
    stack[index].closeFn();
    stack.length = stack.length - 1;

    if (!stack.length) {
      document.removeEventListener('keydown', onDocumentEscape);
      listener = null;
    }
  }
};

export const setEscapeControl = (cb, condition = null) => {
  if (!listener) {
    listener = document.addEventListener('keydown', onDocumentEscape);
  }
  stack.push({
    closeFn: cb,
    conditionFn: condition
  });
};

export const removeEscapeControl = () => {
  stack.length = stack.length - 1;
  if (!stack.length) {
    document.removeEventListener('keydown', onDocumentEscape);
    listener = null;
  }
};
