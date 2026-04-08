import { createElement } from '../../../shared/dom.js';

export function createProfileInfo(about, projects) {
  const container = createElement('div', { className: 'my-content' });
  container.appendChild(createElement('h3', {}, '关于我'));
  container.appendChild(createElement('p', {}, about));
  container.appendChild(createElement('h3', {}, '项目'));

  const list = createElement('ul');
  projects.forEach(project => {
    list.appendChild(createElement('li', {}, project));
  });

  container.appendChild(list);
  return container;
}
