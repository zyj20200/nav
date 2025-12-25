# Docker 简易导航站

这是一个基于 Docker 部署的简易导航网站，支持后台管理功能，可以方便地添加、修改和删除导航链接。

## 功能特点

*   **简洁界面**：基于 Semantic UI 的响应式设计。
*   **后台管理**：提供可视化的后台管理界面 (`/admin`)，无需手动修改代码。
*   **安全保护**：后台管理页面支持密码登录验证。
*   **数据持久化**：导航数据存储在 JSON 文件中，支持 Docker 卷挂载，数据不丢失。
*   **Docker 部署**：一键启动，部署简单。

## 快速开始

### 1. 启动服务

确保您已经安装了 Docker 和 Docker Compose。在项目根目录下运行：

```bash
docker-compose up -d --build
```

### 2. 访问网站

*   **前台首页**: [http://localhost:880](http://localhost:880)
*   **后台管理**: [http://localhost:880/admin](http://localhost:880/admin)

### 3. 后台登录

*   默认密码: `admin123`

## 配置说明

### 修改后台密码

编辑 `docker-compose.yml` 文件，修改 `environment` 下的 `ADMIN_PASSWORD` 变量：

```yaml
version: '3'
services:
  nav-server:
    # ...
    environment:
      - ADMIN_PASSWORD=your_new_password # 在这里修改密码
    # ...
```

修改后需要重启容器生效：

```bash
docker-compose up -d
```

### 数据备份

所有的导航数据存储在 `html/data.json` 文件中。该文件已通过 Docker 卷挂载到本地，您可以直接备份该文件。

## 开发说明

本项目后端使用 TypeScript (Node.js + Express) 编写。

### 目录结构

*   `html/`: 前端静态资源 (HTML, CSS, JS, 图片)
*   `src/`: 后端 TypeScript 源码
*   `docker-compose.yml`: Docker 编排文件
*   `Dockerfile`: 镜像构建文件

### 本地开发

1.  安装依赖:
    ```bash
    npm install
    ```

2.  启动开发服务器:
    ```bash
    npm run dev
    ```
