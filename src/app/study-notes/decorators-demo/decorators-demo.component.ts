import { Component, OnInit } from '@angular/core';
import {Confirmable, Emoji} from "./decorators-demo01";

@Component({
  selector: 'app-decorators-demo',
  templateUrl: './decorators-demo.component.html',
  styleUrls: ['./decorators-demo.component.scss']
})
export class DecoratorsDemoComponent implements OnInit {

  @Emoji() title = '装饰器';
  constructor() { }

  ngOnInit() {

  }

  @Confirmable('确定要打印吗？')
  onClick() {
    console.log('hello world');
  }

}
