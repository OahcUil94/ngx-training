import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-data-section-title',
  templateUrl: './data-section-title.component.html',
  styleUrls: ['./data-section-title.component.scss']
})
export class DataSectionTitleComponent {
  @Input('title') title = '';
  constructor() { }
}
