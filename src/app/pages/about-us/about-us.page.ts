import {Component, ViewEncapsulation} from '@angular/core';

export class TeamItem {
  title: string = '';
  text: string[] = [];
}

@Component({
  templateUrl: 'about-us.page.html',
  styleUrls: ['about-us.page.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'about-us-page'
  }
})
export class AboutUsPage {
  teams = [
    {
      title: 'Konzept & Organisation',
      text: ['Gisela Reppel', 'Antje Krah', 'Kati Stüdemann ']
    },
    {
      title: 'Festivaltitel',
      text: ['Fatima Kahn']
    },
    {
      title: 'Kuration & Mitarbeit Grafik',
      text: ['Cate Lartey']
    },
    {
      title: 'Grafikdesign',
      text: [ 'Yuxing Li']
    },
    {
      title: 'Programmierung',
      text: [ 'Cesaire Sielatchom', 'Vorname Nachname']
    },
    {
      title: 'Foto & Film',
      text: [ 'Boris Siyam' ]
    },
    {
      title: 'Verwaltungsaufgaben',
      text: [ 'Peter Urban' ]
    },
    {
      title: 'Besonderer Dank an',
      text: [ 'Dr. Ümit Kosan', 'Tülin Dolutas', 'Dr. Omar Al Ghawi', 'Mamadou Sow', 'Kalainithy Shabesan']
    }

  ];
}
