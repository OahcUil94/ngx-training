# ngx-training

## 版本信息

```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 8.0.2
Node: 10.16.0
OS: darwin x64
Angular: 8.0.0
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.800.2
@angular-devkit/build-angular     0.800.2
@angular-devkit/build-optimizer   0.800.2
@angular-devkit/build-webpack     0.800.2
@angular-devkit/core              8.0.2
@angular-devkit/schematics        8.0.2
@angular/cli                      8.0.2
@ngtools/webpack                  8.0.2
@schematics/angular               8.0.2
@schematics/update                0.800.2
rxjs                              6.4.0
typescript                        3.4.5
webpack                           4.30.0
```

## 初始化命令

`ng new ngx-training -v --style=scss -g --minimal -S --skip-install --routing=false`

## 创建组件

`ng generate component xxx`，简写：`ng g c xxx`

## 添加路由

ng g module app-routing --flat --module=app

--flat参数：会直接创建一个xxx.module.ts文件，如果没有该参数，则先创建xxx目录，然后在xxx目录下创建xxx.module.ts文件

ng g module app-routing --flat --module=app

--module=app：该参数会将刚创建的模块注册到app模块中（添加到imports元数据中）

## 创建带有路由信息的模块

`ng g m xxx --routing`


