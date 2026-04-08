# 前端学习演示项目

这是一个基于 Vue 3 和 Vite 的前端学习演示项目。

## 当前架构

- `index.html`：Vite 入口 HTML
- `src/main.js`：Vue 应用挂载入口
- `src/App.vue`：应用根组件
- `src/style.css`：全局样式
- `src/modules`：各个功能模块目录
- `src/shared`：共享工具与通用逻辑

## 模块目录

- `src/modules/learning`：学习模块
- `src/modules/resources`：资源模块
- `src/modules/engineering`：工程模块
- `src/modules/display`：展示模块
- `src/modules/my`：我的模块

每个模块已迁移为 Vue 单文件组件，并按功能拆分为：

- `store`：数据状态
- `api`：静态数据/链接
- `*.vue`：模块组件

## 运行方法

1. 跳转到项目根目录：
   ```bash
   cd /Users/bao/web
   ```

2. 安装依赖（首次运行或依赖更新时执行）：
   ```bash
   npm install
   ```
   > 注意：`npm install` 只需要在首次运行或 `package.json` 依赖更新时执行一次即可。

3. 启动开发服务器：
   ```bash
   npm run dev
   ```
   > 部署成功标志：终端显示类似 `Local: http://localhost:5173` 且无错误信息，浏览器可正常访问该地址。

4. 打开浏览器访问：
   ```text
   http://localhost:5173
   ```

## 生产构建

1. 构建项目：
   ```bash
   npm run build
   ```
2. 预览构建结果：
   ```bash
   npm run preview
   ```
3. 终端会显示静态预览地址，通常为 `http://localhost:4173`

## 部署说明

- 将 `dist/` 目录部署到静态托管服务
- 支持平台：Vercel、Netlify、GitHub Pages、任意静态服务器
- 不要直接用 Live Server 访问原始 `index.html`，项目需要通过 Vite 或构建后的资源运行

## 备注

- 当前项目使用 Vue 3 单文件组件架构
- 通用逻辑集中在 `src/shared`，模块按动态导入解耦
