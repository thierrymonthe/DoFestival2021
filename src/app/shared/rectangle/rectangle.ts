import {Component, HostBinding, Input} from '@angular/core';

@Component({
  template: '',
  selector: 'app-rectangle',
  host: {
    class: 'app-rectangle'
  }
})
export class Rectangle {
  @Input()
  @HostBinding('style.width')
  width: string = '200px';

  @HostBinding('style.height')
  height: string = '200px';
}
