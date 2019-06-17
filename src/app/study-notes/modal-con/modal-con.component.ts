import { Component } from '@angular/core';
import { ModalDomService } from '../modal-module/modal-dom.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-modal-con',
  templateUrl: './modal-con.component.html',
  styleUrls: ['./modal-con.component.scss'],
  providers: [ModalDomService]
})
export class ModalConComponent {
  constructor(private service: ModalDomService) {}

  open() {
    this.service.appendComponentTo(true, true, ModalContentComponent, {count: 12345});
  }
}
