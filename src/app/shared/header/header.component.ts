import {Component} from '@angular/core';

@Component({
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  selector: 'app-header',
  host: {
    class: 'header-menu-item'
  }
})


export class HeaderComponent {

  menus: { link: string, label: string }[] = [
    {
      link: '/program',
      label: 'Programm'
    }, {
      link: '/expert',
      label: 'Expert*innen'
    }, {
      link: '/about-us',
      label: 'Über uns'
    }, {
      link: '/contact',
      label: 'Kontakt'
    }
  ];


}
