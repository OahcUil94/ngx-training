import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector, Type
} from '@angular/core';
import { MaskLayerComponent } from './mask-layer/mask-layer.component';

interface ComponentConfig {
  inputs: object;
  outputs: object;
}

@Injectable()
export class ModalDomService {

  private maskRef: ComponentRef<any>;

  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  public appendComponentTo(maskClickClose: boolean, showMaskLayer: boolean, component: any) {
    const factory = this.cfr.resolveComponentFactory(MaskLayerComponent);
    this.maskRef = factory.create(this.injector);
    this.attachConfig({
      inputs: { maskClickClose, showMaskLayer },
      outputs: {
        onMaskClick: () => this.removeComponent()
      }
    });

    const instance = this.maskRef.instance as MaskLayerComponent;
    instance.setContentRef(this.cfr.resolveComponentFactory(component));

    this.appRef.attachView(this.maskRef.hostView);

    const elem = (this.maskRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(elem);
  }

  public removeComponent() {
    this.appRef.detachView(this.maskRef.hostView);
    this.maskRef.destroy();
  }

  private attachConfig(config: ComponentConfig){
    if (!this.maskRef) throw('ModalDomService maskRef is undefined');

    let inputs = config.inputs;
    let outputs = config.outputs;

    for(let key in inputs){
      this.maskRef.instance[key] = inputs[key];
    }
    for(let key in outputs){
      this.maskRef.instance[key] = outputs[key];
    }
  }
}
