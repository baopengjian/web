import { createElement } from '../../../shared/dom.js';

export function createLearningInfo() {
  return createElement(
    'div',
    { className: 'module-content' },
    createElement('h3', {}, '基础概念'),
    createElement('p', {}, '前端开发涉及 HTML、CSS 和 JavaScript 的组合。')
  );
}
