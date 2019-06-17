import {
  Component,
  ComponentFactory,
  ComponentRef,
  ElementRef,
  Input,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-mask-layer',
  templateUrl: './mask-layer.component.html',
  styleUrls: ['./mask-layer.component.scss']
})
export class MaskLayerComponent {

  @ViewChild('masklayer', {static: false})
  masklayer: ElementRef;

  @ViewChild('masklayercontent', {read: ViewContainerRef, static: true})
  masklayercontent: ViewContainerRef;

  @Input('maskClickClose') maskClickClose = true;
  @Input('onMaskClick') onMaskClick = () => {};
  @Input('showMaskLayer') showMaskLayer = true;

  constructor() { }

  onMaskLayerClick(target: HTMLElement) {
    if (!this.masklayer) return;
    const elem = this.masklayer.nativeElement as HTMLElement;
    if (target !== elem) return;
    if (!this.maskClickClose) return;

    this.onMaskClick();
  }

  setContentRef(factory: ComponentFactory<any>): ComponentRef<any> {
    return this.masklayercontent.createComponent(factory);
  }
}
