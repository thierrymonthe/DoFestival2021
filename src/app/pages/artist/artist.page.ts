import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

export interface Expert {
  imgSrc: string;
  name: string;
  content: string;
  id: string;
}

@Component({
  templateUrl: 'artist.page.html',
  styleUrls: ['artist.page.scss']
})
export class ArtistPage implements OnInit, AfterViewInit {
  items: Expert[] = [
    {
      imgSrc: '2021_10_05_Sandra Abd\'Allah-Alvarenz Ramin¡rez2.png',
      content: `dekoloniale, antirassi-stische und abolition-istische kubanische Afrofeministin und erfolgreiche Bloggerin.`,
      name: 'Sandra Abd’Allah-Alvarez Ramírez',
      id: 'sandra'
    },
    {
      imgSrc: '2021_10_16_Glen Akama Eseme.png',
      content: `Bauingenieur, schreibt gerade an seiner Promotion und engagiert sich im VKII e.V.`,
      name: 'Glen Aksama Eseme',
      id: 'eseme'
    },
    {
      imgSrc: '2021_10_08_Yksel Ekinci.png',
      content: `Professorin an der FH Bielefeld und Sprachwissenschaftlerin.`,
      name: 'Prof. Dr. Yüksel Ekinci',
      id: 'ekinci'
    },
    {
      imgSrc: '20021_10_19_22_Fatima Khan_Moderation.png',
      content: `Autorin, Künstlerin, Kuratorin und Moderatorin. `,
      name: 'Fatima Khan',
      id: 'khan'
    },
    {
      imgSrc: '2021_10_19_Seyda Kurt_Lesung.png',
      content: `freie Journalistin, Kuratorin, Moderatorin, Speakerin und Buchautorin`,
      name: 'Seyda Kurt',
      id: 'fatima'
    },
    {
      imgSrc: '2021_10_12_Ferney Lawey Segura_Musik.png',
      content: `Musiker und Experte für Marimba de Chonta.`,
      name: 'Ferney Lawey Segura',
      id: 'segura'
    },
    {
      imgSrc: '2021_10_26_ Jordanne Malena mit Utku.png',
      content: `mit ihrem „Mineral Singing“ eine der facettenreichsten Stimmen der brasilianischen Musikszene.`,
      name: 'Jordanne Malena',
      id: 'malana'
    },
    {
      imgSrc: '2021_10_16_Mudjacka Mvunuku.png',
      content: `hat Informationswissen-schaften in Köln studiert, arbeitet als Fotograf und als freier Mitarbeiter im Medienprojekt Wuppertal.`,
      name: 'Mudjacka Mvunuku',
      id: 'mudjacka'
    },
    {
      imgSrc: '2021_10_16_Mudjacka Mvunuku.png',
      content: `deutscher Journalist, Podcaster, Moderator und Übersetzer.`,
      name: 'Malcolm Ohanwe',
      id: 'malcolm'
    },

    {
      imgSrc: '2021_10_12_Sigrid Y Palacias Castillo und Moderation 5_10_2021.png',
      content: `Kulturwissenschaftlerin und Expertin für Marimba de Chonta.`,
      name: 'Dr. Sigrid Y. Palacias Castillo',
      id: 'sigrid'
    },
    {
      imgSrc: '2021_10_08_Ulrike Podhajsky.png',
      content: `Sozialwissenschaftlerin und Expertin im Bereich Flüchtlingsberatung.`,
      name: 'Ulrike Podhajsky',
      id: ''
    },
    {
      imgSrc: '2021_10_08_Cesaire Sielatchom.png',
      content: `IT-Experte, aktiv im VKII e.V. und wichtiger Unterstützer des Bildungswerk Vielfalt.`,
      name: 'Cesaire Sielatchom',
      id: 'cesaire'
    },
    {
      imgSrc: 'Living Library_Boris Siyam.png',
      content: `hat Maschinenbau in Dortmund studiert und arbeitet auch als Fotograf und Filmemacher.`,
      name: 'Boris Siyam',
      id: ''
    },
    {
      imgSrc: '2021_10_29_Hanna Taieb Ezzraimi.png',
      content: `Studentin der Meeresbiologie und engagiert sich für die Selbstverständlichkeit einer diversen Gesellschaft..`,
      name: 'Hanna Taieb Ezzraimi',
      id: '',
    },
    {
      imgSrc: '2021_10_16_LukaTimm.png',
      content: `beschäftigt sich in seinen Abschlussarbeiten mit performativer Männlichkeit, maskulinen Körperidealen und Homophobie. `,
      name: 'Luka Timm',
      id: 'luka'
    },
    {
      imgSrc: '2021_010_08_Roxanna-Lorraine Witt_bunt_ca. 200 KB.png',
      content: `Aktivistin und Angehörige der dt. Sinti-Community sowie Expertin für Radikalisierung im Netz und „Digital Native“.`,
      name: 'Roxanna-Lorraine Witt',
      id: 'roxanna'
    },
    {
      imgSrc: '2021_10_22_Hegameh Yaghoobufarah.png',
      content: `eutsche nichtbinäre Person des Journalismus, die auch schriftstellerisch tätig ist.`,
      name: 'Hengameh Yaghoobifarah',
      id: 'hengameh'
    },
    {
      imgSrc: '2021_10_26_Utku Yurttas.png',
      content: `Pianist dessen musikali-sches Selbstverständnis weit über den reinen Jazz hinaus reicht. Yurttas darf man getrost als Weltmusiker bezeichnen..`,
      name: 'Utku Yurttas',
      id: ''
    }
  ];

  constructor(private route: ActivatedRoute) {}
  ngAfterViewInit(): void {
    this.route.paramMap.subscribe(params => {
      const data: {id?: string} = (params as any).params;
      if (data.id != null) {
        const el: HTMLElement = document.getElementById(data.id);
        el.scrollIntoView();
      }
    });
  }

  ngOnInit(): void {}
}
