import { createElement } from '../../../shared/dom.js';

export function createToolList(tools) {
  const list = createElement('ul');
  tools.forEach(tool => {
    list.appendChild(createElement('li', {}, tool));
  });
  return list;
}
