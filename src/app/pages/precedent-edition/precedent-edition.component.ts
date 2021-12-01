import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precedent-edition',
  templateUrl: './precedent-edition.component.html',
  styleUrls: ['./precedent-edition.component.scss']
})
export class PrecedentEditionPage implements OnInit {
  video = '/assets/videos/diashow.mp4';
  img7 = '/assets/images/img7.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
