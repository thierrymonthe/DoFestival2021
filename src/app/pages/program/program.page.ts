import {Component, ViewEncapsulation} from '@angular/core';

interface ProgramItemDescription {
  date: Date;
  imgSrc: string;
  content: string;
  title: string;
  time?: Date;
  place?: string;
  link?: string;
  category?: {
    title: string;
    link: string;
  };
  details?: {
    tel: string;
    email: string;
    dienstag: string
  };
}

interface Details {
  tel: string;
  email: string;
}

@Component({
  templateUrl: 'program.page.html',
  styleUrls: ['program.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramPage {

  items: ProgramItemDescription[] = [
    {
      date: new Date(2021, 10, 5),
      imgSrc: '/assets/images/home-1.PNG',
      title: 'Was bedeutet es, im Kuba des 21. Jahrhunderts Feministin zu sein?',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
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
