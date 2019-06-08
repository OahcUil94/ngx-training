import { Component, Injector, OnInit } from '@angular/core';
import { DiTrainingService } from './di-training.service';

@Component({
  selector: 'app-di-training',
  templateUrl: './di-training.component.html',
  styleUrls: ['./di-training.component.scss'],
  providers: [DiTrainingService]
})
export class DiTrainingComponent implements OnInit {

  constructor(private injector: Injector) {
    console.log(this.injector);
  }

  ngOnInit() {
  }

}
