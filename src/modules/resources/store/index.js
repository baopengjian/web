import { mdnLinks, w3cLinks } from '../api/index.js';

export const resourcesStore = {
  title: '资源模块',
  description: '这里列出常用前端文档与标准资源。',
  groups: [
    { title: 'MDN', description: 'MDN 提供全面的前端教程与参考文档。', links: mdnLinks },
    { title: 'W3C', description: 'W3C 提供 Web 标准规范和官方文档。', links: w3cLinks }
  ]
};
