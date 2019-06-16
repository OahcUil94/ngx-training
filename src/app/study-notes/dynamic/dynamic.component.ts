import {
  Compiler,
  Component,
  ComponentFactoryResolver, NgModule,
  ViewChild,
  ViewContainerRef,
  CompilerFactory,
//  COMPILER_OPTIONS
} from '@angular/core';

import {
  DynamicChildComponent
} from './dynamic-child/dynamic-child.component';

// import {JitCompilerFactory} from "@angular/platform-browser-dynamic";
//
// export function createCompiler(compilerFactory: CompilerFactory) {
//   return compilerFactory.createCompiler();
// }

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  // providers: [
  //   {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
  //   {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
  //   {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]}
  // ],
})
export class DynamicComponent {
  @ViewChild('dymcon', {read: ViewContainerRef, static: true})
  dymcon: ViewContainerRef;

  constructor(
    private cfr: ComponentFactoryResolver,
    private cp: Compiler
  ) {}

  onClickAddComponent() {
    let com = this.cfr.resolveComponentFactory(DynamicChildComponent);
    this.dymcon.createComponent(com);
  }

  onClickAddModule() {
    @Component({
      template: '动态组件',
    })
    class DyCom {}

    @NgModule({
      declarations: [
        DyCom
      ]
    })
    class DyModule {}

    let module = this.cp.compileModuleAndAllComponentsSync(DyModule).componentFactories.find(comFac => comFac.componentType === DyCom);
    this.dymcon.createComponent(module);
  }
}
