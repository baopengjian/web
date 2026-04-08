import { createHeader, createMainContainer } from './shared/dom.js';
import { moduleLoaders } from './modules/index.js';

const appRoot = document.getElementById('app');
const navItems = [
  { key: 'learning', label: '学习' },
  { key: 'resources', label: '资源' },
  { key: 'engineering', label: '工程' },
  { key: 'display', label: '展示' },
  { key: 'my', label: '我的' }
];
let activeButton = null;

export async function setupApp() {
  if (!appRoot) return;

  const header = createHeader(navItems, handleNavClick);
  const main = createMainContainer();

  appRoot.appendChild(header);
  appRoot.appendChild(main);

  await loadModule('learning');
  const firstButton = header.querySelector('[data-module="learning"]');
  if (firstButton) {
    firstButton.classList.add('active');
    activeButton = firstButton;
  }
}

async function handleNavClick(moduleKey, button) {
  if (activeButton) {
    activeButton.classList.remove('active');
  }

  activeButton = button;
  activeButton.classList.add('active');
  await loadModule(moduleKey);
}

async function loadModule(moduleKey) {
  const main = document.querySelector('main');
  if (!main || !moduleLoaders[moduleKey]) return;

  main.textContent = '';
  const module = await moduleLoaders[moduleKey]();
  const moduleElement = module.render();
  if (moduleElement) {
    main.appendChild(moduleElement);
  }
}
