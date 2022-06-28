# 步骤

------------

1. 安装node
2. 检查版本号 `node -v` 和 `npm -v`
3. 安装淘宝镜像 `npm install -g cnpm --registry=https://registry.npm.taobao.org`
4. 检查淘宝镜像(cnpm)的版本号 `cnpm -v`
5. 全局安装gulp `cnpm install --global gulp-cli`
6. 创建项目目录
7. 进入目录内
8. 输入`npm init` 创建一个本地项目
9. 本地安装gulp `cnpm install --save-dev gulp`
10. 输入`gulp -v` 去查看全局和本地的版本号

## 插件名

- 压缩html插件`cnpm install --save-dev gulp-minify-html` == `cnpm i -S-D gulp-minify-html`
- css前缀的插件`cnpm i -S-D gulp-autoprefixer`
- 压缩css插件 `cnpm install gulp-clean-css --save-dev`
- 预处理器stylus `npm install --save-dev gulp-stylus`
