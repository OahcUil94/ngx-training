# ApplicationRef

## 类型的定义

```javascript
interface ApplicationRef {
  componentTypes: Type<any>[]
  components: ComponentRef<any>[]
  isStable: Observable<boolean>
  viewCount
  bootstrap<C>(componentOrFactory: ComponentFactory<C> | Type<C>, rootSelectorOrNode?: any): ComponentRef<C>
  tick(): void
  attachView(viewRef: ViewRef): void
  detachView(viewRef: ViewRef): void
}
```

## 属性

所有属性都是只读的：

- `componentTypes: Type<any>[]` 获取已注册到此应用程序的组件类型列表，甚至在创建组件之前就会填充此列表
- `components: ComponentRef<any>[]` 获取注册到此应用程序的组件列表
- `isStable: Observable<boolean>` 返回一个Observable，指示应用程序何时稳定或不稳定
- `viewCount`: 返回附加视图的数量

## 方法

### bootstrap()

在应用程序的根级别引导新组件。

### attachView() 

attachView(viewRef: ViewRef): void：

- 附加视图以便对其进行脏检查 
- 视图将在销毁时自动分离
- 如果视图已附加到ViewContainer，则抛出异常

### detachView()

detachView(viewRef: ViewRef): void：

- 再次从脏检查中分离视图

