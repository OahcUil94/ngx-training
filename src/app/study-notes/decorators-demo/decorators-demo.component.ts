import { Component } from '@angular/core';
import { Confirmable, Emoji } from "./decorators-demo01";

@Component({
  selector: 'app-decorators-demo',
  templateUrl: './decorators-demo.component.html',
  styleUrls: ['./decorators-demo.component.scss']
})
export class DecoratorsDemoComponent {
  @Emoji() title = '装饰器';

  @Confirmable('确定要打印吗？')
  onClick() {
    console.log('hello world');
  }

}
