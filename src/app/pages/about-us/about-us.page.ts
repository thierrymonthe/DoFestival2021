import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

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
export class AboutUsPage implements OnInit {
  teams = [
    {
      title: 'Konzept & Organisation',
      text: ['Gisela Reppel', 'Antje Krah', 'Kati Stüdemann '],
      id: 'gisela'
    },
    {
      title: 'Festivaltitel',
      text: ['Fatima Kahn'],
      id: 'fatima'
    },
    {
      title: 'Kuration & Mitarbeit Grafik',
      text: ['Cate Lartey'],
      id: 'cate'
    },
    {
      title: 'Grafikdesign',
      text: [ 'Yuxing Li'],
      id: 'yuxing'
    },
    {
      title: 'Programmierung',
      text: [ 'Cesaire Sielatchom', 'Vorname Nachname'],
      id: 'cesaire'
    },
    {
      title: 'Foto & Film',
      text: [ 'Boris Siyam' ],
      id: 'boris'
    },
    {
      title: 'Verwaltungsaufgaben',
      text: [ 'Peter Urban' ],
      id: 'peter'
    },
    {
      title: 'Besonderer Dank an',
      text: [ 'Dr. Ümit Kosan', 'Tülin Dolutas', 'Dr. Omar Al Ghawi', 'Mamadou Sow', 'Kalainithy Shabesan'],
      id: 'omar'
    }

  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const data: {id?: string} = (params as any).params;
      if (data.id != null) {
        const el: ElementRef<HTMLElement> = document.getElementById(data.id);
        el.nativeElement.scrollIntoView();
      }
    });
  }
}
