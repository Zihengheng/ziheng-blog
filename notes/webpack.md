# Webpack

学习内容来自官方文档：https://www.webpackjs.com/concepts/

## 概念

webpack：jiavaScript 应用程序的静态模块打包器（module bundler）。

webpack打包的时候：--> 递归地构建一个dependency graph（依赖关系图）-->将模块打包成一个/多个bundle

**四个核心概念** :

* entry
* output
* loader
* plugins

### 1. entry points(入口起点)

#### 1.1 语法

* 单个入口
* 对象语法

#### 1.2 场景

##### 多页面应用程序



