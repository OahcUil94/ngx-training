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

  private maskRefs: ComponentRef<any>[] = [];

  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  public appendComponentTo(maskClickClose: boolean, showMaskLayer: boolean, component: any) {
    const factory = this.cfr.resolveComponentFactory(MaskLayerComponent);
    const maskRef = factory.create(this.injector);
    this.maskRefs.push(maskRef);

    ModalDomService.attachConfig({
      inputs: { maskClickClose, showMaskLayer },
      outputs: {
        onMaskClick: () => this.removeComponent()
      }
    }, maskRef);

    const instance = maskRef.instance as MaskLayerComponent;
    instance.setContentRef(this.cfr.resolveComponentFactory(component));

    this.appRef.attachView(maskRef.hostView);

    const elem = (maskRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(elem);
  }

  public removeComponent() {
    if (this.maskRefs.length <= 0) {
      return ;
    }

    const maskRef = this.maskRefs.pop();
    this.appRef.detachView(maskRef.hostView);
    maskRef.destroy();
  }

  private static attachConfig(config: ComponentConfig, ref: ComponentRef<any>){
    if (!ref) throw('ModalDomService maskRef is undefined');

    let inputs = config.inputs;
    let outputs = config.outputs;

    for(let key in inputs){
      ref.instance[key] = inputs[key];
    }
    for(let key in outputs){
      ref.instance[key] = outputs[key];
    }
  }
}
