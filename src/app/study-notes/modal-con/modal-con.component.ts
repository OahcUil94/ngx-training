import {ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit} from '@angular/core';
import { ModalDomService } from '../modal-module/modal-dom.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-modal-con',
  templateUrl: './modal-con.component.html',
  styleUrls: ['./modal-con.component.scss'],
  providers: [ModalDomService]
})
export class ModalConComponent implements OnInit {

  constructor(private service: ModalDomService) {}

  ngOnInit() {
  }

  open() {
    this.service.appendComponentTo(true, true, ModalContentComponent);
  }
}
