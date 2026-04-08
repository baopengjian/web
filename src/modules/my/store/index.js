import { profileApi } from '../api/index.js';

export const myStore = {
  title: '我的模块',
  description: '个人信息和项目介绍。',
  about: profileApi.about,
  projects: profileApi.projects
};
