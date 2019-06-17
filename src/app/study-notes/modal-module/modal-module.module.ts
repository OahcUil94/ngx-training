import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskLayerComponent } from './mask-layer/mask-layer.component';

@NgModule({
  declarations: [MaskLayerComponent],
  imports: [
    CommonModule
  ],
  exports: [MaskLayerComponent],
  entryComponents: [MaskLayerComponent]
})
export class ModalModuleModule { }
