# 入口组件entryComponent

## 概念

组件类型有两种：

1. 组件是被包含在模板中，声明式加载
2. 组件没有在模板中引用过，命令式加载

入口组件是ngx命令式加载的任意组件（也就是没有在模板中引用过的组件）

## 定义入口组件的方式

1. 引导用的根组件，也就是`AppModule`的`bootstrap`数组中声明的组件，例如：`AppComponent`
2. 路由中定义的组件（所有的路由组件都必须是入口组件，需要把组件添加到两个地方，路由中和entryComponents中，但是编译器可以识别出路由定义，会自动把路由组件添加到entryComponents）
3. 把组件定义在`@NgModule`装饰器的entryComponents数组中

## 入口组件与编译器

- `@NgModule`的`declarations`数组的组件，如果并没有使用组件，打包时，`tree shake`特性会把没有用到的组件移除，来减少打包之后的代码体积。
- `@NgModule`的`entryComponents`数组的组件，即使没有使用，也不会被移除。
