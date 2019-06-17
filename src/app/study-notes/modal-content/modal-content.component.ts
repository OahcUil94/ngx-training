import {ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit} from '@angular/core';
import {ModalDomService} from "../modal-module/modal-dom.service";

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  private injector: Injector;
  private aloneService: ModalDomService;

  constructor(
    private service: ModalDomService
  ) {
  }

  ngOnInit() {
  }

  open() {
  }

  remove() {
    this.service.removeComponent();
  }
}
