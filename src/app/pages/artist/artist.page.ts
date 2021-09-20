import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

export interface Expert {
  imgSrc: string;
  name: string;
  content: string;
  id: string;
  link?: string;
}

@Component({
  templateUrl: 'artist.page.html',
  styleUrls: ['artist.page.scss']
})
export class ArtistPage implements OnInit, AfterViewInit {
  items: Expert[] = [
    {
      imgSrc: '11_Foto.jpg',
      content: `dekoloniale, antirassi-stische und abolition-istische kubanische Afrofeministin und erfolgreiche Bloggerin.`,
      name: 'Sandra Abd’Allah-Alvarez Ramírez',
      id: 'sandra',
      link: 'https://afrocubanas.com '
    },
    {
      imgSrc: '12_Foto.jpg',
      content: `Bauingenieur, schreibt gerade an seiner Promotion und engagiert sich im VKII e.V.`,
      name: 'Glen Aksama Eseme',
      id: 'eseme',
      link: 'https://www.bauwesen.tu-dortmund.de/stb/de/Lehrstuhl/Personen/Wiss_Mitarbeiter/Akama-Eseme.html'
    },
    {
      imgSrc: '13_Foto.jpg',
      content: `Professorin an der FH Bielefeld und Sprachwissenschaftlerin, Foto: Dennis Treu`,
      name: 'Prof. Dr. Yüksel Ekinci ',
      id: 'gianni',
      link: 'https://www.fh-bielefeld.de/personenverzeichnis/yueksel-ekinci1i'
    },
    {
      imgSrc: '14_Foto.jpg',
      content: `Unternehmer, Aktivist und Performer, setzt sich für die Rechte von Roma & Sinti, macht sich stark für die Menschen der LGBTIQ-Community`,
      name: 'Gianni Jovanovic',
      id: 'gianni',
      link: 'https://www.gianni-jovanovic.de/'
    },
    {
      imgSrc: '15_Foto.jpeg',
      content: `Politische Aktivistin, Moderatorin & Projektmitarbeiterin, hat 2017 ihren Batchelor of Arts gemacht `,
      name: 'Ceren Kaya ',
      id: 'Ceren',
      link: '#'
    },
    {
      imgSrc: '16_Foto.jpg',
      content: `Journalistin, Kuratorin, Moderatorin, Speakerin und Buchautorin, Foto: Thomas Seips`,
      name: 'Şeyda Kurt',
      id: 'fatima',
      link: 'https://seydakurt.de'
    },
    {
      imgSrc: '17_Foto.jpg',
      content: `Autorin, Künstlerin, Kuratorin und Moderatorin. `,
      name: 'Fatima Khan',
      id: 'khan'
    },
    {
      imgSrc: '18_Foto.jpg',
      content: `Musiker und Experte für Marimba de Chonta`,
      name: 'Ferney Lawey Segura t',
      id: 'ferney',
      link: '#'
    },
    {
      imgSrc: '19_Foto.jpg',
      content: `Musikerin und Sängern`,
      name: 'Jordanne Malena ',
      id: 'segura',
      link: '#'
    },
    {
      imgSrc: '20_Foto.jpg',
      content: `Informationswissenschaftler Fotograf und freier Mitarbeiter im Medienprojekt Wuppertal `,
      name: 'Mudjacka Mvunuku',
      id: 'Mudjacka',
      link:'https://mudjacka-bilili.de'

    },
    {
      imgSrc: '21_Foto.png',
      content: `Kulturwissenschaftlerin und Expertin für Marimba de Chonta, Foto Boris Siyam`,
      name: 'Dr. Sigrid Y. Palacias Castillo ',
      id: 'Sigrid',
      link: 'https://mangroveculture.org/'
    },
    {
      imgSrc: '22_Foto.jpg',
      content: `hat Soziale Arbeit studiert und ist Expertin im Bereich Flüchtlingsberatung, Foto: Dennis Treu`,
      name: 'Ulrike Podhajsky  ',
      id: 'Ulrike'
    },

    {
      imgSrc: '23_Foto.jpg',
      content: `IT-Experte, aktiv im VKII e.V. und wichtiger Unterstützer des Bildungswerk Vielfalt, Foto: Dennis Treu  `,
      name: 'Cesaire Sielatchom ',
      id: 'Cesaire',
      link: '#'
    },
    {
      imgSrc: '3_Foto.png',
      content: `hat Maschinenbau studiert, Fotograf und Filmemacher `,
      name: 'Boris Siyam ',
      id: ''
    },
    {
      imgSrc: '8_Foto.jpg',
      content: `Studentin der Meeresbiologie, engagiert sich für die Selbstverständlichkeit einer diversen Gesellschaft`,
      name: 'Hanna Taieb Ezzraimi ',
      id: 'Hanna'
    },
    {
      imgSrc: '24_Foto.jpg',
      content: `beschäftig sich mit performativer Männlichkeit, maskulinen Körperidealen und Homophobie, seit 2015 ehrenamtlich beim SCHLAU Dortmund tätig.`,
      name: 'Luka Timm ',
      id: 'Luka',
      link: 'https://www.slado.de/'
    },
    {
      imgSrc: '25_Foto.jpg',
      content: `Aktivistin & Angehörige der dt. Sinti-Community, Expertin für Radikalisierung im Netz `,
      name: 'Roxanna-Lorraine Witt',
      id: 'Roxanna',
      link:'https://www.instagram.com/save.space.official/'
    },
    {
      imgSrc: '6_Foto.jpg',
      content: `eine deutsche nichtbinäre Person des Journalismus, die auch schriftstellerisch tätig ist, Foto: Tarek M. Mawad `,
      name: 'Hengameh Yaghoobifarah ',
      id: 'Hengameh',
      link: '#'
    },
    {
      imgSrc: '7_Foto.jpg',
      content: `Pianist & Weltmusiker, dessen musikalisches Selbstverständnis weit über den reinen Jazz hinaus reicht`,
      name: 'Utku Yurttas ',
      id: 'roxanna',
      link: '#'
    }
    // {
    //   imgSrc: '2021_10_22_Hegameh Yaghoobufarah.png',
    //   content: `eutsche nichtbinäre Person des Journalismus, die auch schriftstellerisch tätig ist.`,
    //   name: 'Hengameh Yaghoobifarah',
    //   id: 'hengameh'
    // },
    // {
    //   imgSrc: '2021_10_26_Utku Yurttas.png',
    //   content: `Pianist dessen musikali-sches Selbstverständnis weit über den reinen Jazz hinaus reicht. Yurttas darf man getrost als Weltmusiker bezeichnen..`,
    //   name: 'Utku Yurttas',
    //   id: 'utku',
    //   link: 'http://utkuyurttas.com'
    // }
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe(params => {
      const data: { id?: string } = (params as any).params;
      if (data.id != null) {
        const el: HTMLElement = document.getElementById(data.id);
        el.scrollIntoView();
      }
    });
  }

  ngOnInit(): void {
  }
}
