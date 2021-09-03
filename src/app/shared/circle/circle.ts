import {Component, HostBinding, Input} from '@angular/core';

@Component({
  template: '',
  selector: 'app-circle',
  host: {
    class: 'app-circle'
  }
})
export class Circle {
  @Input()
  @HostBinding('style.width')
  @HostBinding('style.height')
  radius: string = '200px';
}
