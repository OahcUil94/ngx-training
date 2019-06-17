import { Component, Input } from '@angular/core';
import { ModalDomService } from '../modal-module/modal-dom.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent {
  @Input() count = 0;

  constructor(private service: ModalDomService) {}

  open() {
    this.service.appendComponentTo(true, false, ModalContentComponent, {count: 1234567});
  }

  remove() {
    this.service.removeComponent();
  }
}
