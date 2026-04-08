import { createElement } from '../../../shared/dom.js';
import { safeEvaluate } from '../../../shared/utils.js';

export function createCalculator() {
  const wrapper = createElement('div', { className: 'display-section' });
  const input = createElement('input', {
    id: 'expression',
    type: 'text',
    placeholder: '例如 12 + 5 * 3'
  });
  const button = createElement('button', { type: 'button' }, '计算');
  const resultValue = createElement('span', { id: 'resultValue' }, '--');
  const result = createElement('p', { className: 'result' }, '结果：', resultValue);
  const errorMessage = createElement('p', { className: 'error', id: 'errorMessage' });

  button.addEventListener('click', () => {
    const expression = input.value.trim();
    if (!expression) {
      errorMessage.textContent = '请输入表达式';
      resultValue.textContent = '--';
      return;
    }

    const value = safeEvaluate(expression);
    if (value === null) {
      errorMessage.textContent = '表达式无效';
      resultValue.textContent = '--';
    } else {
      errorMessage.textContent = '';
      resultValue.textContent = value;
    }
  });

  wrapper.appendChild(createElement('h3', {}, '计算器'));
  wrapper.appendChild(createElement('div', { className: 'form-row' }, createElement('label', { for: 'expression' }, '输入表达式：'), input));
  wrapper.appendChild(button);
  wrapper.appendChild(result);
  wrapper.appendChild(errorMessage);

  return wrapper;
}
