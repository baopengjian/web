import { createElement } from '../../../shared/dom.js';
import { createMultiplicationTable } from '../../../shared/utils.js';

export function createMultiplicationSection() {
  const wrapper = createElement('div', { className: 'display-section' });
  const button = createElement('button', { type: 'button' }, '生成乘法表');
  const tableContainer = createElement('div', { className: 'table-container' });

  button.addEventListener('click', () => {
    tableContainer.innerHTML = '';
    tableContainer.appendChild(createMultiplicationTable(12));
  });

  wrapper.appendChild(createElement('h3', {}, '乘法表'));
  wrapper.appendChild(button);
  wrapper.appendChild(tableContainer);

  return wrapper;
}
