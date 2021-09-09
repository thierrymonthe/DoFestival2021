import {Component, ViewEncapsulation} from '@angular/core';

interface ProgramItemDescription {
  date: Date;
  imgSrc: string;
  content: string;
  title: string;
}

@Component({
  templateUrl: 'program.page.html',
  styleUrls: [ 'program.page.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class ProgramPage {

  items: ProgramItemDescription[] = [
    {
      date: new Date(2021, 9, 6),
      imgSrc: '/assets/images/home-1.PNG',
      title: 'Lorem ipsum dolor sit amet',
      content: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `
    },
    {
      date: new Date(2021, 10, 6),
      imgSrc: '/assets/images/home-1.PNG',
      title: 'Lorem ipsum dolor sit amet',
      content: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `
    },
    {
      date: new Date(2021, 10, 6),
      imgSrc: '/assets/images/home-1.PNG',
      title: 'Lorem ipsum dolor sit amet',
      content: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `
    },
    {
      date: new Date(2021, 10, 6),
      imgSrc: '/assets/images/home-1.PNG',
      title: 'Lorem ipsum dolor sit amet',
      content: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `
    },
    {
      date: new Date(2021, 10, 6),
      imgSrc: '/assets/images/home-1.PNG',
      title: 'Lorem ipsum dolor sit amet',
      content: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `
    }
  ];
}
