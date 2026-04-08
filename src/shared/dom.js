export function createElement(tag, props) {
  const element = document.createElement(tag);
  props = props || {};
  const children = Array.prototype.slice.call(arguments, 2);
  for (var key in props) {
    if (props.hasOwnProperty(key)) {
      var value = props[key];
      if (key === 'className') {
        element.className = value;
      } else if (key === 'dataset') {
        for (var dataKey in value) {
          if (value.hasOwnProperty(dataKey)) {
            element.dataset[dataKey] = value[dataKey];
          }
        }
      } else if (key.startsWith('on') && typeof value === 'function') {
        element.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        element.setAttribute(key, value);
      }
    }
  }
  children.forEach(function(child) {
    if (child == null) return;
    element.append(typeof child === 'string' ? document.createTextNode(child) : child);
  });
  return element;
}

export function createHeader(navItems, onClick) {
  const header = createElement('header', { className: 'header' });
  header.appendChild(createElement('h1', {}, '前端学习演示项目'));

  const nav = createElement('nav', { className: 'nav' });
  navItems.forEach(function(item) {
    var button = createElement(
      'button',
      {
        className: 'nav-btn',
        dataset: { module: item.key },
        onclick: function() { onClick(item.key, button); }
      },
      item.label
    );
    nav.appendChild(button);
  });
  header.appendChild(nav);
  return header;
}

export function createMainContainer() {
  return createElement('main', { className: 'main' });
}

export function createSection(title, description) {
  const section = createElement('section', { className: 'module active' });
  section.appendChild(createElement('h2', {}, title));
  section.appendChild(createElement('p', {}, description));
  return section;
}

export function createLinkList(items) {
  var list = createElement('ul');
  items.forEach(function(item) {
    list.appendChild(
      createElement(
        'li',
        {},
        createElement('a', { href: item.href, target: '_blank' }, item.label)
      )
    );
  });
  return list;
}
