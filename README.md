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

## 服务端渲染

```
$ ng add @nguniversal/express-engine --clientProject ngx-training
Installing packages for tooling via npm.
npm WARN @nguniversal/express-engine@7.0.2 requires a peer of @angular/platform-server@>=6.0.0 but none is installed. You must install peer dependencies yourself.

+ @nguniversal/express-engine@7.0.2
added 1 package and audited 15978 packages in 6.274s
found 0 vulnerabilities

Installed packages for tooling via npm.
CREATE src/main.server.ts (220 bytes)
CREATE src/app/app.server.module.ts (318 bytes)
CREATE tsconfig.server.json (204 bytes)
CREATE webpack.server.config.js (1360 bytes)
CREATE server.ts (1500 bytes)
UPDATE package.json (1471 bytes)
UPDATE angular.json (3708 bytes)
UPDATE src/main.ts (432 bytes)
UPDATE src/app/app.module.ts (521 bytes)

> webpack-cli@3.3.3 postinstall /Users/cube/Desktop/training/ngx-training/node_modules/webpack-cli
> node ./bin/opencollective.js



                            Thanks for using Webpack!
                 Please consider donating to our Open Collective
                        to help us maintain this package.



              👉  Donate: https://opencollective.com/webpack/donate


added 19 packages from 22 contributors and audited 18092 packages in 6.86s
found 0 vulnerabilities

audited 18092 packages in 7.156s
found 0 vulnerabilities
```

命令的`ng add @nguniversal/express-engine --clientProject ngx-training`的`--clientProject`指定的参数必须和`angular.json`中的project名相同。


执行命令：`npm run build:ssr && npm run serve:ssr`启动服务。

最好自行安装一下`npm i -D @types/express`

## lint

`ng lint`用于进行静态语法规范的扫描，把违背规范的代码列出来。

## 组件的生命周期

constructor：构造函数永远首先被调用
ngOnChanges：输入属性变化时被调用
ngOnInit：组件初始化时被调用
ngDoCheck：脏值检测时被调用，angular去检测内部的状态变化

ngAfterContentInit：当内容投影ng-content完成时调用
ngAfterContentChecked：angular检测投影内容时调用（多次）
ngAfterViewInit：当组件视图（子视图）初始化完成时（组件加子组件都初始化完成）
ngAfterViewChecked：当检测视图变化时（多次）

ngOnDestroy：当组件销毁时
