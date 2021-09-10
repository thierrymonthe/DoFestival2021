import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: 'program-item.html',
  selector: 'app-program-item',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'program-item'
  }
})
export class ProgramItem {
  @Input()
  date: Date;
  @Input()
  place: string;
  @Input()
  link: string;
  @Input()
  time: Date;


  @Input()
  imgSrc: string;
}
