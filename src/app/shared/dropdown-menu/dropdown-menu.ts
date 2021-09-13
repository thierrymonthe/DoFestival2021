import {Component, Input} from '@angular/core';

@Component({
  templateUrl: 'dropdown-menu.html',
  selector: 'app-dropdown-menu',
  styleUrls: [ 'dropdown-menu.scss' ]
})
export class DropdownMenu {
  @Input()
  menuItems: any[] = [];

  menuOpen: boolean = false;

  close(): void {
    this.menuOpen = false;
  }

  open(): void {
    this.menuOpen = true;
  }
}
