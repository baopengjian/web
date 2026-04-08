import { createElement, createLinkList } from '../../../shared/dom.js';

export function createResourceGroup(title, description, links) {
  const container = createElement('div', { className: 'resource-submodule' });
  container.appendChild(createElement('h3', {}, title));
  container.appendChild(createElement('p', {}, description));
  container.appendChild(createLinkList(links));
  return container;
}
