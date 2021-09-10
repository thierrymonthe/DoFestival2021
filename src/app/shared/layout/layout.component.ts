import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss'],
  selector: 'app-layout',
  host: {
    class: 'app-layout',
  },
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {

}
