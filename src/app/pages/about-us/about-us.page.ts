import {Component, ViewEncapsulation} from '@angular/core';

export class TeamItem {
  imgSrc: string = '/assets/images/artist.jpg';
  text: string = 'Vorname Nachname ist Beruf und hat Aufgabe XY und ein bis zwei Sätze über diese Person. Für das Festival und so weiter.';
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
  teams = [new TeamItem(), new TeamItem(), new TeamItem(), new TeamItem(), new TeamItem(), new TeamItem(), new TeamItem(), new TeamItem()];
}
