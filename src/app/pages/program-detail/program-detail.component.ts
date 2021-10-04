import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {ProgramItemDescription} from '../program/program.page';
import {ActivatedRoute} from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.scss']
})
export class ProgramDetailComponent implements OnInit, AfterViewInit {
  currentObject: ProgramItemDescription;
  other = {
    title: 'Weitere Veranstaltungen',
    events: [
      {
        category: 'Begegnen',
        title: 'Demokratiekunstwerk',
        image: './assets/events/2021_10_08_Ulrike_Podhajsky.jpg'
      },
      {
        category: 'Begegnen',
        title: 'Was ist Männlichkeit heute?',
        image: './assets/events/2021_10_16_LukaTimm.jpg'
      },
      {
        category: 'Zuhören',
        title: 'Radikale Zärtlichkeit',
        image: './assets/events/Kurt_Radikale_Zärtlichkeit_Buchcover.jpg'
      },
    ]
  };

  ids = ['1', '2', '10', '11', '3', '4', '5', '6', '7'];

  private content = `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation
gibt? Dr. Sigrid Y. Palacios Castillo moderiert den Abend und wird dieser und weiteren Fragen im
Gespräch mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und
abolitionistischen kubanischen Afrofeministin nachgehen.`;
  items: ProgramItemDescription[] = [

    {
      place: 'Schauspiel Dortmund: Institut, Hiltropwall 15, 44137 Dortmund ',
      link: 'https://www.google.de/maps/place/Schauspielhaus+Dortmund/@51.5116199,7.4589282,17z/data=!3m1!5s0x47b919e0c285c7e1:0x2efe979ff836ef85!4m9!1m2!2m1!1sSchaupiel+Dortmund!3m5!1s0x47b919e0c285c7df:0x3f525fe6dc603f4a!8m2!3d51.5115167!4d7.4604889!15sChNTY2hhdXNwaWVsIERvcnRtdW5kkgEXcGVyZm9ybWluZ19hcnRzX3RoZWF0ZXI',
      routinkLing: '/program-detail/1',
      id: '1',
      date: new Date(2021, 10, 5, 20),
      stringDate: 'Di 5 Okt 2021',
      stringTime: '20:00',
      imgSrc: './assets/themenfotos/2021_10_12_.png',
      category: {
        title: 'Sehen',
        link: 'Schauspiel Dortmund: Institut',
        more: 'Dienstag, 5 Okt 2021, 20:00 im'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr',
        title1: 'Anschrift',
        title2: 'Anmeldung',
        content1: [
          {text: 'Schauspiel Dortmund', link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8'},
          'Institut Hiltropwall 15',
          '44137 Dortmund'
        ],
        // content2: [
        //   'Die Anmeldung erfolgt über die Ticket-Hotline der Theaterkasse:',
        //   'Tel.: 0231/50 27 222', {text: 'telefonverkauf@theaterdo.de', class: 'email'},
        //   'Dienstag bis Samstag: 10.00 – 18.30 Uhr'
        // ],
        content2: [
          'Die Anmeldung erfolgt über:',
          {text: 'mail@nullpluseinsfestival.de', class: 'email'},
          'Stichtort: Kuba'
          // 'Tel.: 0231/50 27 222',
          // {text: 'telefonverkauf@theaterdo.de', class: 'email'},
          // 'Dienstag bis Samstag: 10.00 – 18.30 Uhr'
        ]
      },
      title: 'Was bedeutet es, im Kuba des 21. Jahrhunderts Feministin zu sein?',
      content: `dfddd`,
      contentDetail: [
        {
          text: 'Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? ',
        },
        {
          text: 'Dr. Sigrid Y. Palacios Castillo',
          class: 'category-link color-white',
          link: 'https://mangroveculture.org/ '
        },
        {
          text: ' moderiert den Abend und wird dieser und weiteren Fragen im Gespräch mit '
        },
        {
          text: 'Sandra Abd’Allah-Alvarez Ramírez',
          link: 'https://afrocubanas.com'
        },
        {
          text: ', einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen.'
        }
      ]
    },
    {
      place: 'Dortmunder U :Flux Inn, Leonie-Reygers-Terrasse 44137 Dortmund  ',
      link: 'https://www.google.de/maps/place/Dortmunder+U+Zentrum+f%C3%BCr+Kunst+und+Kreativit%C3%A4t/@51.5150033,7.4511446,17z/data=!4m12!1m6!3m5!1s0x47b919e8a09192e5:0xd1407c3198ff0b70!2sDortmunder+U+Zentrum+f%C3%BCr+Kunst+und+Kreativit%C3%A4t!8m2!3d51.515!4d7.4533333!3m4!1s0x47b919e8a09192e5:0xd1407c3198ff0b70!8m2!3d51.515!4d7.4533333',
      date: new Date(2021, 10, 8, 18, 30),
      routinkLing: '/program-detail/2',
      id: '2',
      stringDate: 'Fr 8 Okt 2021',
      imgSrc: './assets/program/Grup_foto3.JPG',
      category: {
        title: 'Begegnen',
        link: 'Dortmunder U: Flux Inn',
        more: 'Freitag, 8 Okt 2021, 18:30 im'
      },

      details: {
        tel: '0231/50 27 222',
        email: 'mail@nullpluseinsfestival.de ',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr',
        other: {
          title: 'Weitere Veranstaltungen',
        },
        title1: 'Anschrift',
        content1: [
          'Dortmunder U',
          'Leonie-Reygers-Terrasse',
          '44137 Dortmund'
        ],
        title2: 'Anmeldung',
        content2: [
          'Die Anmeldung erfolgt über',
          {text: 'mail@nullpluseinsfestival.de', class: 'email'},
          {text: 'mo.bildung@stadtdo.de', class: 'email'},
          'Stichwort: Demokratiekunstwerk'
        ]
      },
      title: 'Demokratiekunstwerk des Bildungswerk Vielfalt im Dortmunder U und Expert*innentalk zu der Frage: Welche Zukunftsfragen brauchen wir? ',
      content: `Das vom Bildungswerk Vielfalt gestaltete ‚Demokratiekunstwerk‘ bietet keine Antwort auf die Fragen: Wo findet Zukunft statt? Wer wird am Zukunftsprozess beteiligt? Wer gestaltet Zukunft? Es soll einen Diskurs eröffnen. Roxanna-Lorraine Witt spricht mit Prof. Prof. Yüksel Ekinci, Cesaire Sielatchom und Ulrike Podhajsky über die Entstehung des Kunstwerks und  diskutiert über die Fragen. `,
      contentDetail: [
        {
          text: 'Das vom Bildungswerk Vielfalt gestaltete ‚Demokratiekunstwerk‘ bietet keine Antwort auf die Fragen: Wo findet Zukunft statt? Wer wird am Zukunftsprozess beteiligt? Wer gestaltet Zukunft? Es soll einen Diskurs eröffnen. ',
        },
        {
          text: 'Roxanna-Lorraine Witt',
          link: 'https://www.instagram.com/save.space.official/',
          class: 'category-link color-white'
        },
        {
          text: ' spricht mit ',
        },
        {
          text: 'Prof. Yüksel Ekinci',
          link: 'https://www.fh-bielefeld.de/personenverzeichnis/yueksel-ekinci1i',
          class: 'category-link color-white'
        },
        {
          text: ', '
        },
        {
          text: 'Cesaire Sielatchom',
          link: '#'
        },
        {
          text: ' und '
        },
        {
          text: 'Ulrike Podhajsky',
          link: '#'
        },
        {
          text: ' über die Entstehung des Kunstwerks und diskutiert über die Fragen.'
        }
      ],
    },
    {
      id: '10',
      place: 'Schauspiel Dortmund: Institut, Hiltropwall 15, 44137 Dortmund  ',
      link: 'https://www.google.de/maps/place/Schauspielhaus+Dortmund/@51.5116199,7.4589282,17z/data=!3m1!5s0x47b919e0c285c7e1:0x2efe979ff836ef85!4m9!1m2!2m1!1sSchaupiel+Dortmund!3m5!1s0x47b919e0c285c7df:0x3f525fe6dc603f4a!8m2!3d51.5115167!4d7.4604889!15sChNTY2hhdXNwaWVsIERvcnRtdW5kkgEXcGVyZm9ybWluZ19hcnRzX3RoZWF0ZXI',
      routinkLing: '/program-detail/10',
      date: new Date(2021, 10, 12, 20),
      stringDate: 'Di 12 Okt 2021',
      stringTime: '20:00',
      imgSrc: './assets/program/Expert_Musiker_2021_10_12_.jpg',
      category: {
        title: 'Sehen',
        link: 'Schauspiel Dortmund: Institut',
        more: 'Dienstag, 12 Okt 2021, 20:00 im'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr',
        title1: 'Anschrift',
        content1: [
          {text: 'Schauspiel Dortmund', link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8'},
          'Hiltropwall 15',
          '44137 Dortmund',
          // {text: 'Schauspiel Dortmund', link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8'},
        ],
        title2: 'Anmeldung',
        content2: [
          'Die Anmeldung erfolgt über:',
          {text: 'mail@nullpluseinsfestival.de', class: 'email'},
          'Stichwort: Kolumbien'
        ]
        // content2: [
        //   'Die Anmeldung erfolgt über die Ticket-Hotline der Theaterkasse: ',
        //   'Tel.: 0231/50 27 222',
        //   {text: 'telefonverkauf@theaterdo.de', class: 'email'},
        //   'Dienstag bis Samstag: 10.00 – 18.30 Uhr'
        // ]
      },
      title: 'Von der Unsichtbarkeit und der Unterdrückung afrokolumbianischer Musik zum Kulturerbe Kolumbiens',
      content: `Die Marimba de Chonta ist das Instrument aus Kolumbien für die ursprüngliche Musik des Kontinents. Sie wurde verboten, verschwiegen, ersetzen hat sich doch befreit und ist heute immaterielles Weltkulturerbe der UNESCO. Dr. Sigrid Y. Palacios Castillo und der Musiker Ferney L. Segura nehmen uns mit auf eine kulturhistorische und musikalische Reise.`,
      contentDetail: [
        {
          text: 'Die Marimba de Chonta ist das Instrument aus Kolumbien für die ursprüngliche Musik des Kontinents. Sie wurde verboten, verschwiegen und hat sich doch befreit und ist heute immaterielles Weltkulturerbe der UNESCO. '
        },
        {
          text: 'Dr. Sigrid Y. Palacios Castillo',
          link: 'https://mangroveculture.org/ '
        },
        {
          text: ' und der Musiker '
        },
        {
          text: 'Ferney L. Segura',
          link: '#'
        },
        {
          text: ' nehmen uns mit auf eine kulturhistorische und musikalische Reise.'
        }
      ],
    },
    {
      id: '11',
      place: 'BierCafé West: Veranstaltungssaal',
      link: 'https://www.google.de/maps/place/BierCaf%C3%A9+West/@51.5113681,7.445349,17z/data=!4m12!1m6!3m5!1s0x47b9195cba48fc11:0x96290b6884c7970!2sBierCaf%C3%A9+West!8m2!3d51.5114418!4d7.4475298!3m4!1s0x47b9195cba48fc11:0x96290b6884c7970!8m2!3d51.5114418!4d7.4475298',
      routinkLing: '/program-detail/11',
      date: new Date(2021, 10, 16, 18),
      stringDate: 'Sa 16 Okt 2021',
      stringTime: '18:00',
      imgSrc: './assets/program/Expert_2021_10_16_LikaTimm.jpg',
      category: {
        title: 'Begegnen',
        link: 'BierCafé West: Veranstaltungssaal',
        more: 'Samstag, 16 Okt 2021, 18:00 im'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr',
        title1: 'Anschrift',
        content1: [
          'BierCafé West',
          'Lange Str. 42',
          '44137 Dortmund'
        ],
        title2: 'Anmeldung',
        content2: [
          'Die Anmeldung erfolgt über',
          {text: 'mail@nullpluseinsfestival.de', class: 'email'},
          'Stichwort: Männlichkeit'
        ]
      },
      title: 'Was ist Männlichkeit heute? Ein Gespräch mit Gianni Jovanovic, Mudjacka Mvunuku und Luka Timm',
      content: `In der Öffentlichkeit wird aktuell viel über stereotype Rollenbilder, fragile und toxische Männlichkeit gesprochen. Aber noch viel zu selten geschieht dies aus einer nicht westlichen Tradition und Perspektive oder der LGBTIQ_Community heraus. Das wollen wir mit unserem Moderator Glen Akama Eseme und den Talkgästen Gianni Jovanivic, Mudjacka Mvunuku und Luka Timm ändern. `,
      contentDetail: [
        {
          text: 'In der Öffentlichkeit wird aktuell viel über stereotype Rollenbilder, fragile und toxische Männlichkeit gesprochen. Aber noch viel zu selten geschieht dies aus einer nicht westlichen Tradition und Perspektive oder der LGBTIQ_Community heraus. Das wollen wir mit unserem Moderator '
        },
        {
          text: 'Glen Akama Eseme',
          link: 'https://www.bauwesen.tu-dortmund.de/stb/de/Lehrstuhl/Personen/Wiss_Mitarbeiter/Akama-Eseme.html'
        },
        {
          text: ' und den Talkgästen '
        },
        {
          text: 'Gianni Jovanovic, ',
          link: 'https://www.gianni-jovanovic.de/'
        },
        {
          text: 'Mudjacka Mvunuku',
          link: 'https://mudjacka-bilili.de'
        },
        {
          text: ' und '
        },
        {
          text: 'Luka Timm',
          link: 'https://www.slado.de '
        },
        {text: ' ändern.'}
      ]
    },
    {
      place: 'Schauspiel Dortmund: Institut, Hiltropwall 15, 44137 Dortmund ',
      link: 'https://www.google.de/maps/place/Schauspielhaus+Dortmund/@51.5116199,7.4589282,17z/data=!3m1!5s0x47b919e0c285c7e1:0x2efe979ff836ef85!4m9!1m2!2m1!1sSchaupiel+Dortmund!3m5!1s0x47b919e0c285c7df:0x3f525fe6dc603f4a!8m2!3d51.5115167!4d7.4604889!15sChNTY2hhdXNwaWVsIERvcnRtdW5kkgEXcGVyZm9ybWluZ19hcnRzX3RoZWF0ZXI',
      date: new Date(2021, 10, 5, 20),
      id: '3',
      routinkLing: '/program-detail/3',
      stringDate: 'Di 19 Okt 2021',
      stringTime: '20:00',
      imgSrc: './assets/program/05_photo.jpg',
      category: {
        title: 'Zuhören',
        link: 'Schauspiel Dortmund: Institut',
        more: 'Dienstag, 19 Okt 2021, 20:00 im'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr',
        title1: 'Anschrift',
        content1: [
          {text: 'Schauspiel Dortmund', link: 'https://goo.gl/maps/GWNg4akPeB4jem1o8'},
          'Hiltropwall 15',
          '44137 Dortmund',

        ],
        title2: 'Anmeldung',
        //TODO: THIS INFORMATION is COMMING later
        // content2: [
        //   'Die Anmeldung erfolgt über die Ticket-Hotline der Theaterkasse:',
        //   'Tel.: 0231/50 27 222',
        //   {text: 'telefonverkauf@theaterdo.de', class: 'email'},
        //   'Dienstag bis Samstag: 10.00 – 18.30 Uhr'
        // ]
        content2: [
          'Die Anmeldung erfolgt über:',
          {text: 'mail@nullpluseinsfestival.de', class: 'email'},
          'Stichwort: Lesung'
          // 'Tel.: 0231/50 27 222',
          // {text: 'telefonverkauf@theaterdo.de', class: 'email'},
          // 'Dienstag bis Samstag: 10.00 – 18.30 Uhr'
        ]
      },
      title: 'Radikale Zärtlichkeit – Lesung mit Şeyda Kurt',
      content: `Seyda Kurt schreibt in ihrem Bestseller ‚Radikale Zärtlichkeit‘  über die Jahrtausende alte Frage der Liebe. Sie sucht keine Antwort, sondern fordert eine Revolution in der Liebe. Über neue Fragen und Narrative spricht Moderatorin Fatima Khan, ebenfalls Autorin, mit Şeyda Kurt.`,
      contentDetail: [
        {
          text: 'Seyda Kurt',
          link: 'https://seydakurt.de'
        },
        {
          text: ' schreibt in ihrem Bestseller ‚Radikale Zärtlichkeit‘  über die Jahrtausende alte Frage der Liebe. Sie sucht keine Antwort, sondern fordert eine Revolution in der Liebe. Über neue Fragen und Narrative spricht Moderatorin ',
        },
        {
          text: 'Fatima Khan',
          link: '#'
        },
        {
          text: ', ebenfalls Autorin, mit ihr.'
        },
        {
          text: ' Die Veranstaltung findet in Kooperation mit dem Literaturhaus Dortmund statt.'
        }
      ],
    },
    {
      place: 'Literaturhaus Dortmund, Neuer Graben 78, 44139 Dortmund',
      link: 'https://www.google.de/maps/place/literaturhaus.dortmund/@51.5053259,7.4500481,17z/data=!3m1!5s0x47b919dca3807e9f:0xfe86238131954e9e!4m12!1m6!3m5!1s0x47b919dca47770a1:0xb5697db821ee2231!2sliteraturhaus.dortmund!8m2!3d51.5053226!4d7.4522368!3m4!1s0x47b919dca47770a1:0xb5697db821ee2231!8m2!3d51.5053226!4d7.4522368',
      date: new Date(2021, 10, 22, 19),
      id: '4',
      stringTime: '19:00',
      routinkLing: '/program-detail/4',
      stringDate: 'Fr 22 Okt 2021',
      imgSrc: './assets/program/Buchcover.jpg',
      category: {
        title: 'Zuhören',
        link: 'Literaturhaus Dortmund',
        more: 'Freitag, 22 Okt 2021, 19:00 im'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr',
        title1: 'Anschrift',
        content1: [
          'Literaturhaus Dortmund',
          'Neuer Graben 78',
          '44139 Dortmund',
        ],
        title2: 'Anmeldung',
        content2: [
          [
            {
              text: 'Die Anmeldung erfolgt über den Veranstaltungskalender des '
            },
            {
              text: 'Literaturhaus Dortmund.',
              link: 'https://www.literaturhaus-dortmund.de/kalender/'
            }
          ],
        ]
      },
      title: 'Ministerium der Träume – Lesung mit Hengameh Yaghoobifarah',
      content: `Fatima Khan, ebenfalls Autorin, spricht mit Hengameh Yaghoobifarah über Wahl- und Zwangsfamilie, über den bedingungslosen Zusammenhalt von Geschwistern und das Vordringen in die dunkelsten Ecken deutscher Gegenwart.`,
      contentDetail: [
        {
          text: 'Fatima Khan',
          link: '#'
        },
        {
          text: ', ebenfalls Autorin, spricht mit '
        },
        {
          text: 'Hengameh Yaghoobifarah',
        },
        {
          text: ' über Wahl- und Zwangsfamilie, über den bedingungslosen Zusammenhalt von Geschwistern und das Vordringen in die dunkelsten Ecken deutscher Gegenwart.'
        },
        {
          text: ' Die Veranstaltung findet in Kooperation mit dem Literaturhaus Dortmund statt.'
        }
      ]
    },
    {
      place: 'Jazzclub Domicil, Hansastr. 7-11-, 44137 Dortmund',
      link: 'https://www.google.de/maps/place/domicil/@51.5156693,7.4614663,17z/data=!3m2!4b1!5s0x47b919e3cd1672c5:0x95c0355946ab2df3!4m5!3m4!1s0x47b919e3cba4e417:0x6b83c12271715027!8m2!3d51.515666!4d7.463655',
      date: new Date(2021, 10, 26, 19),
      id: '5',
      routinkLing: '/program-detail/5',
      stringDate: 'Di 26 Okt 2021',
      stringTime: '19:00',
      imgSrc: './assets/program/EXpert_2021_10_26_JordanneMalena mitUtku.JPG',
      category: {
        title: 'Zuhören',
        link: 'Jazzclub Domicil',
        more: 'Dienstag, 26 Okt 2021, 19:00 im'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr',
        title1: 'Anschrift',
        content1: [
          'Jazzclub Domicil',
          'Hansastr. 7-11',
          '44137 Dortmund',
        ],

        title2: 'Anmeldung',
        content2: [
          [
            {
              text: 'Es ist keine Anmeldung erforderlich.'
            }

          ]
        ]
      },
      title: 'Abyssal Music – Ein Dialog zwischen östlicher und brasilianischer Musik in der Mitte Europas',
      content: `Welche Rolle nimmt der Feminismus in einem Land ein, in dem es nur eine legale Frauenorganisation gibt? Dr. Sigrid Y. Palacios Castillo moderiert und wird dieser und weiteren Fragen im Gespräch den Abend mit Sandra Abd'Allah-Alvarez Ramírez, einer dekolonialen, antirassistischen und abolitionistischen kubanischen Afrofeministin nachgehen. `,
      contentDetail: [
        {
          text: 'Was passiert, wenn Jazz anatolische Musik und brasilianische Polyrhythmik miteinander verbindet? Ein Dialog entsteht, bei dem die etablierten Hierarchien zwischen den verschiedenen Musiktraditionen aufgelöst werden. So lassen die Musiker*innen Weltmusik entstehen.'
        }
      ]
    },
    {
      place: 'Helmholtz Gymnasium: Aula, Münsterstr. 122, 44145 Dortmund',
      link: 'https://www.google.de/maps/place/Helmholtz-Gymnasium+Dortmund/@51.5265978,7.4576596,17z/data=!3m1!5s0x47b919f999aa2109:0x778915db682253e9!4m12!1m6!3m5!1s0x47b919f99e8823e7:0xdccddff4eb39de58!2sHelmholtz-Gymnasium+Dortmund!8m2!3d51.5265945!4d7.4598483!3m4!1s0x47b919f99e8823e7:0xdccddff4eb39de58!8m2!3d51.5265945!4d7.4598483',
      date: new Date(2021, 10, 5, 14),
      id: '6',
      routinkLing: '/program-detail/6',
      stringDate: 'Fr 29 Okt 2021',
      stringTime: '14:00',
      imgSrc: './assets/program/Hana.jpg',
      category: {
        title: 'Begegnen',
        link: 'Helmholtz Gymnasium: Aula',
        more: 'Freitag, 29 Okt 2021, 14:00 im'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr',
        title1: 'Anschrift',
        content1: [
          'Helmholtz Gymnasium',
          'Münsterstr. 122',
          '44145 Dortmund'
        ],
        title2: 'Anmeldung',
        content2: [
          'Die Anmeldung erfolgt über',
          {text: 'mail@nullpluseinsfestival.de', class: 'email'},
          'Stichwort: Schülertalk'
        ]
      },
      title: 'Schülertalk zum Thema „Nachhaltiger Fischfang“',
      content: this.content,
      contentDetail: [
        {
          text: 'Was hat nachhaltiger Fischfang mit Kultur, Diversität und Komplexität zu tun? Mit der kulturellen Vielfalt kommt auch eine entsprechende Vielfalt an Nahrungsmitteln zu uns. Wie diese ihren Weg zu uns finden, hat einen enormen Einfluss auf unser Ökosystem. Es handelt sich um eine äußerst komplexe Angelegenheit. '
        },
        {
          text: 'Kati Stüdemann spricht darüber mit der Meeresbiologin ',
        },
        {
          text: 'Hanna Trieb Ezzraimi',
          link: '#'
        },
        {
          text: '.'
        }
      ],
    },
    {
      place: 'Dortmunder U:Kino ',
      link: 'https://www.dortmunder-u.de/',
      date: new Date(2021, 11, 3, 19),
      routinkLing: '/program-detail/7',
      id: '7',
      stringDate: 'Mi 3 Nov 2021',
      imgSrc: './assets/program/BorisSiyam.jpg',
      category: {
        title: 'Sehen',
        link: 'Dortmunder U: Kino',
        more: 'Mittwoch, 3 Nov 2021, 19:00 im'
      },
      details: {
        tel: '0231/50 27 222',
        email: 'telefonverkauf@theaterdo.de',
        dienstag: 'Samstag: 10.00 – 18.30 Uhr',
        title1: 'Anschrift',
        content1: [
          'Dortmunder U',
          'Leonie-Reygers-Terrasse',
          '44137 Dortmund',
        ],
        title2: 'Anmeldung',
        content2: [
          'Es ist keine Anmeldung erforderlich.'
        ],
        content3: {
          imgSrc: './assets/program/10_Foto.jpg',
        }
      },
      moreInformation: '',
      title: 'Erfolgsgeschichten „Nordmarkt Tanten“ ein Film von Boris Siyam und Ceren Kaya',
      content: `Dieser Film von Boris Siyam und Ceren Kaya entsteht gerade in Kooperation mit der Stadt Dortmund zu den Feierlichkeiten zum Anwerbeabkommen mit der Türkei vor 60 Jahren und wirft einen liebevollen Blick auf die bisher ungesehenen Tanten vom Nordmarkt.`,
      contentDetail: [
        {
          text: 'Dieser Film von '
        },
        {
          text: 'Boris Siyam',
          link: '#'
        },
        {
          text: ' und '
        },
        {
          text: 'Ceren Kaya',
          link: '#'
        },
        {
          text: ' entsteht gerade in Kooperation mit der Stadt Dortmund zu den Feierlichkeiten zum Anwerbeabkommen mit der Türkei vor 60 Jahren und wirft einen liebevollen Blick auf die bisher ungesehenen Tanten vom Nordmarkt.'
        }
      ],
    },
  ];

  get window(): Window {
    return this.document.defaultView;
  }

  isString(val): boolean {
    return typeof val === 'string';
  }

  isTable(val): boolean {
    return Array.isArray(val);
  }

  haveClass(al): boolean {
    return al.class !== undefined;
  }

  constructor(private route: ActivatedRoute, @Inject(DOCUMENT) readonly document: Document) {
    this.currentObject = null;
  }

  public redirect(url: string, target = '_blank'): Promise<boolean> {

    return new Promise<boolean>((resolve, reject) => {
      if (url !== '#') {
        try {
          resolve(!!this.window.open(url, target));
        } catch (e) {
          reject(e);
        }
      }
    });
  }

  getHref(mail: string): string {
    return `mailto: ${mail}`;
  }

  getLink(el): string {
    return `/${el}`;
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      const data: { id?: string } = (params as any).params;
      if (data.id != null) {
        this.currentObject = this.items.find(e => e.id === data.id);
        this.upDate();
      }
    });
  }

  reduceList(tab: ProgramItemDescription[], some: ProgramItemDescription): ProgramItemDescription[] {
    return tab.filter(e => e.id !== some.id);
  }

  choiceElement(tab: ProgramItemDescription[]): ProgramItemDescription {
    const tabTemp = tab.slice(0);
    const val = tabTemp[Math.floor(Math.random() * tabTemp.length)];

    return val;
  }

  generate(): ProgramItemDescription[] {
    const tab: ProgramItemDescription[] = [];
    let tab1 = this.reduceList(this.items, this.currentObject);
    for (let i = 0; i < 3; i++) {
      const el1: ProgramItemDescription = this.choiceElement(tab1);
      tab1 = this.reduceList(tab1, el1);
      tab1 = tab1.filter(e => e.category.title !== el1.category.title);
      tab.push(el1);
    }
    return tab;
  }

  upDate(): void {
    this.other.events = this.generate().map(e => {
      return {
        category: e.category.title,
        image: e.imgSrc,
        title: e.shorTitle,
        id: e.id,
        link: e.link,
        routinkLing: e.routinkLing
      };
    });
  }

  changeCurent(id: string): void {
    this.currentObject = this.items.find(e => e.id === id);
    this.upDate();
    this.window.scrollTo(0, 0);
  }

}
