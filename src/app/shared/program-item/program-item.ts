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
  place: string;
  link: string;

  @Input()
  imgSrc: string;
}
