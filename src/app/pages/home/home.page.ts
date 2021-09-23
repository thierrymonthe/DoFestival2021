import {Component, Inject, OnInit} from '@angular/core';
import {ProgramItemDescription} from '../program/program.page';
import {ActivatedRoute} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  items: ProgramItemDescription[] = [

    {
      id: 1,
      place: 'Schauspiel Dortmund: Institut, Hiltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      routinkLing: '/program-detail/1',
      date: new Date(2021, 10, 5, 20),
      stringDate: 'Di 5 Okt 2021',
      stringTime: '20:00',
      imgSrc: './assets/themenfotos/2021_10_12_.png',
      category: {
        title: 'Sehen',
        link2: '(Feminismus in Kuba)',
        link: 'Schauspiel Dortmund: Institut  '
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
      id: 2,
      place: 'Dortmunder U: Flux Inn, Leonie-Reygers-Terrasse 44137 Dortmund',
      link: 'https://www.google.de/maps/place/Dortmunder+U+Zentrum+f%C3%BCr+Kunst+und+Kreativit%C3%A4t/@51.5150033,7.4511446,17z/data=!4m12!1m6!3m5!1s0x47b919e8a09192e5:0xd1407c3198ff0b70!2sDortmunder+U+Zentrum+f%C3%BCr+Kunst+und+Kreativit%C3%A4t!8m2!3d51.515!4d7.4533333!3m4!1s0x47b919e8a09192e5:0xd1407c3198ff0b70!8m2!3d51.515!4d7.4533333',
      date: new Date(2021, 10, 8, 18, 30),
      routinkLing: '/program-detail/2',
      stringDate: 'Fr 8 Okt 2021',
      imgSrc: './assets/program/Grup_foto3.JPG',
      category: {
        title: 'Begegnen',
        link2: 'Demokratiekunstwerk',
        link: 'Dortmunder U: Flux Inn'
      },

      details: {
        tel: '0231/50 27 222',
        email: 'mail@nullpluseinsfestival.de ',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Demokratiekunstwerk des Bildungswerk Vielfalt im Dortmunder U und Expert*innentalk zu der Frage: Welche Zukunftsfragen brauchen wir?',
      content: `Das vom Bildungswerk Vielfalt gestaltete ‚Demokratiekunstwerk‘ bietet keine Antwort auf die Fragen: Wo findet Zukunft statt? Wer wird am Zukunftsprozess beteiligt? Wer gestaltet Zukunft? es soll eine Diskurs eröffnen. Roxanna-Lorraine Witt spricht mit Prof. Dr. Yüksel Ekinci, Cesaire Sielatchom und Ulrike Podhajsky über die Entstehung des Kunstwerks und die diskutiert über die Fragen. `
    },
    {
      id: 10,
      place: 'Schauspiel Dortmund: Institut, Hiltropwall 15, 44137 Dortmund  ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      routinkLing: '/program-detail/10',
      date: new Date(2021, 10, 12, 20),
      stringDate: 'Di 12 Okt 2021',
      stringTime: '20:00',
      imgSrc: './assets/program/Expert_Musiker_2021_10_12_.jpg',
      category: {
        title: 'Sehen',
        link2: 'Von der Unsichtbarkeit',
        link: 'Schauspiel Dortmund: Institut '
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Von der Unsichtbarkeit und der Unterdrückung afrokolumbianischer Musik zum Kulturerbe Kolumbiens',
      content: `Mit der Marimba de Chonta ist das Instrument aus Kolumbien für die ursprüngliche Musik des Kontinents. Sie wurde verboten, verschwiegen und hat sich doch befreit und ist heute immaterielles Weltkulturerbe der UNESCO. Dr. Sigrid Y. Palacios Castillo und der Musiker Ferney L. Segura nehmen uns mit auf eine kulturhistorische und musikalische Reise.`
    },
    {
      id: 11,
      place: 'BierCafé West: Veranstaltungssaal',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      routinkLing: '/program-detail/11',
      date: new Date(2021, 10, 16, 18),
      stringDate: 'Sa 16 Okt 2021',
      stringTime: '18:00',
      imgSrc: './assets/program/Expert_2021_10_16_LikaTimm.jpg',
      category: {
        title: 'Begegnen',
        link2: 'Was ist Männlichkeit heute?',
        link: 'BierCafé West: Veranstaltungssaal'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Was ist Männlichkeit heute? Ein Gespräch mit Gianni Jovanovic, Mudjacka Mvunuku und Luka Timm',
      content: `Mit der Marimba de Chonta ist das Instrument aus Kolumbien für die ursprüngliche Musik des Kontinents. Sie wurde verboten, verschwiegen und hat sich doch befreit und ist heute immaterielles Weltkulturerbe der UNESCO. Dr. Sigrid Y. Palacios Castillo und der Musiker Ferney L. Segura nehmen uns mit auf eine kulturhistorische und musikalische Reise.`
    },
    {
      id: 3,

      place: 'Schauspiel Dortmund: Institut, Hiltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 20),
      routinkLing: '/program-detail/3',
      stringDate: 'Di 19 Okt 2021',
      imgSrc: './assets/program/Kurt_RadikaleZÑrtlichkeit.jpg',
      category: {
        title: 'Zuhören',
        link2: 'Radikale Zärtlichkeit – Lesung',
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
      id: 4,
      place: 'Schauspiel Dortmund: Institut, Hiltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 22, 19),
      routinkLing: '/program-detail/4',
      stringDate: 'Fr 22 Okt 2021',
      imgSrc: './assets/program/Buchcover.jpg',
      category: {
        title: 'Zuhören',
        link2: 'Ministerium der Träume – Lesung',
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
      id: 5,

      place: 'Schauspiel Dortmund: Institut, Hiltropwall 15, 44137 Dortmund ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 5, 19),
      routinkLing: '/program-detail/5',
      stringDate: 'Di 26 Okt 2021',
      imgSrc: './assets/program/EXpert_2021_10_26_JordanneMalena mitUtku.JPG',
      category: {
        title: 'Zuhören',
        link2: 'Abyssal Music – Konzert',
        link: 'Jazzclub Domicil'
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
      id: 6,

      place: 'Helmholtz Gymnasium: Aula  ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 10, 29, 14),
      routinkLing: '/program-detail/6',
      stringDate: 'Fr 29 Okt 2021',
      imgSrc: './assets/program/Hana.jpg',
      category: {
        title: 'Begegnen',
        link2: 'Schülertalk „Nachhaltiger Fischfang“',
        link: 'Helmholtz Gymnasium: Aula'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Schülertalk mit zum Thema „Nachhaltiger Fischfang“',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
    {
      id: 7,

      place: 'Dortmunder U: Kino ',
      link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8',
      date: new Date(2021, 11, 3, 19),
      routinkLing: '/program-detail/7',
      stringDate: 'Mi 3 Nov 2021',
      stringTime: '19:00',
      imgSrc: './assets/program/BorisSiyam.jpg',
      category: {
        title: 'Sehen',
        link2: 'Erfolgsgeschichten „Nordmarkt Tanten“',
        link: 'Dortmunder U: Kino',
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr'
      },
      title: 'Erfolgsgeschichten „Nordmarkt Tanten“ ein Film von Boris Siyam & Ceren Kaya',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiterer Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `
    },
  ];

  other = [
    {
      content: `Was bedeutet es, im Kuba des 21. Jahrhunderts Feministin zu sein? `,
      category: 'Sehen',
      image: './assets/themenfotos/2021_10_12_.png',
      place: 'Schauspiel Dortmund: Institut',
      routinkLing: '/program-detail/1',

    },
    {
      content: `Demokratiekunstwerk des Bildungswerk Vielfalt im Dortmunder U und Expert*innentalk zu der Frage: Welche Zukunftsfragen brauchen wir? `,
      category: 'Begegnen',
      image: './assets/program/Grup_foto3.JPG',
      place: 'Dortmunder U :Flux Inn, Leonie-Reygers-Terrasse 44137 Dortmund',
      routinkLing: '/program-detail/2',
    },
    {
      content: `Von der Unsichtbarkeit und der Unterdrückung afrokolumbianischer Musik zum Kulturerbe Kolumbiens`,
      category: 'Begegnen',
      image: './assets/program/Expert_2021_10_16_LikaTimm.jpg',
      place: 'BierCafé West: Veranstaltungssaal',
      routinkLing: '/program-detail/11',
    },
  ];

  constructor(private route: ActivatedRoute, @Inject(DOCUMENT) readonly document: Document) {

  }


  ngOnInit(): void {
    this.upDate();
  }


  upDate(): void {
    this.other = this.generate().map(e => {
      return {
        category: e.category.title,
        image: e.imgSrc,
        place: e.place,
        routinkLing: e.routinkLing,
        content: e.title
      };
    });
  }


  // tslint:disable-next-line:typedef
  private generate() {
   return this.items = this.items.sort(() => Math.random() - 0.5);
  }
}
