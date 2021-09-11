import {Component, ViewEncapsulation} from '@angular/core';

interface ProgramItemDescription {
  date: Date;
  stringDate?: string;
  stringTime?: string;
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


@Component({
  templateUrl: 'program.page.html',
  styleUrls: ['program.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramPage {

  items: ProgramItemDescription[] = [

    {
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 20),
      stringDate: 'Di 5 Okt 2021',
      stringTime: '20:00',
      imgSrc: './assets/themenfotos/2021_10_12_.png',
      category: {
        title: 'Sehen',
        link: 'Schauspiel Dortmund: Institut'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Was bedeutet es, im Kuba des 21. Jahrhunderts Feministin zu sein?',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
    {
      place: 'Dortmunder U/Flux Flax, Leonie-Reygers-Terrasse 44137 Dortmund  ',
      link: 'https://www.google.de/maps/place/Dortmunder+U+Zentrum+f%C3%BCr+Kunst+und+Kreativit%C3%A4t/@51.5150033,7.4511446,17z/data=!4m12!1m6!3m5!1s0x47b919e8a09192e5:0xd1407c3198ff0b70!2sDortmunder+U+Zentrum+f%C3%BCr+Kunst+und+Kreativit%C3%A4t!8m2!3d51.515!4d7.4533333!3m4!1s0x47b919e8a09192e5:0xd1407c3198ff0b70!8m2!3d51.515!4d7.4533333',
      date: new Date(2021, 10, 8, 18, 30),
      stringDate: 'Fr 8 Okt 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Begegnung',
        link: 'Dortmunder U: Flux Inn'
      },

      details: {
        tel: '0231/50 27 222',
        email: 'mail@nullpluseinsfestival.de ',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Was ist Männlichkeit heute? Ein Gespräch mit Malcolm Ohanwe, Mudjacka Mvunuku und Luka Timm\n',
      content: `Das vom Bildungswerk Vielfalt gestaltete ‚Demokratiekunstwerk‘ bietet keine Antwort auf die Fragen: Wo findet Zukunft statt? Wer wird am Zukunftsprozess beteiligt? Wer gestaltet Zukunft? es soll eine Diskurs eröffnen. Roxanna-Lorraine Witt spricht mit Prof. Dr. Yüksel Ekinci, Cesaire Sielatchom und Ulrike Podhajsky über die Entstehung des Kunstwerks und die diskutiert über die Fragen. `
    },
    {
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 20),
      stringDate: 'Di 19 Okt 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Zuhören',
        link: 'Schauspiel Dortmund: Institut'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Radikale Zärtlichkeit – Lesung mit Şeyda Kurt',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
    {
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 19),
      stringDate: 'Mo 22 Okt 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Zuhören',
        link: 'Literaturhaus Dortmund'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Ministerium der Träume – Lesung mit Hengameh Yaghoobifarah',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
    {
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 19),
      stringDate: 'Fr 26 Okt 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Zuhören',
        link: 'Jazzclub Domici'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Abyssal Music – Ein Dialog zwischen östlicher und brasilianischer Musik in der Mitte Europas',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
    {
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 14),
      stringDate: 'Mo 29 Okt 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Begegnung',
        link: 'Helmholtz Gymnasium: Aula'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Schülertalk zum Thema „Nachhaltiger Fischfang“',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
    {
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 20),
      stringDate: 'Di 5 Okt 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Sehen',
        link: 'Schauspiel Dortmund/Institut'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Was bedeutet es, im Kuba des 21. Jahrhunderts Feministin zu sein?',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
    {
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 20),
      stringDate: 'Di 5 Okt 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Sehen',
        link: 'Schauspiel Dortmund/Institut'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Was bedeutet es, im Kuba des 21. Jahrhunderts Feministin zu sein?',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
    {
      place: 'Schauspiel Dortmund/Institut, Hilltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 19),
      stringDate: 'Fr 3 Nov 2021',
      imgSrc: './assets/themenfotos/_DTF0739.jpg',
      category: {
        title: 'Sehen',
        link: 'Dortmunder U: Kino'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Erfolgsgeschichten „Nordmarkt Tanten“',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    }
  ];
}
