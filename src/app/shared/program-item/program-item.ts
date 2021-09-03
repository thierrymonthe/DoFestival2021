import {Component, Input} from '@angular/core';

@Component({
  templateUrl: 'program-item.html',
  selector: 'app-program-item',
  host: {
    class: 'program-item'
  }
})
export class ProgramItem {
  @Input()
  date: Date;

  @Input()
  imgSrc: string;
}
