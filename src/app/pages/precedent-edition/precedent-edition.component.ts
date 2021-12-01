import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precedent-edition',
  templateUrl: './precedent-edition.component.html',
  styleUrls: ['./precedent-edition.component.scss']
})
export class PrecedentEditionPage implements OnInit {
  video = '/assets/videos/diashow.mp4';
  img7 = '/assets/images/img7.jpg';
  img6 = 'assets/images/img6.jpg';
  img5 = 'assets/images/img5.jpg';
  img4 = 'assets/images/img4.jpg';
  img3 = 'assets/images/img3.jpg';
  img2 = 'assets/images/img2.jpg';
  img1 = 'assets/images/img1.jpg';
  img8 = 'assets/images/2E.png';
  img9 = 'assets/images/2021.png';
  img10 = 'assets/images/E51.png';
  img11 = 'assets/images/E52.png';
  img12 = 'assets/images/t1.png';
  img13 = 'assets/images/t5.png';

  constructor() { }

  ngOnInit(): void {
  }

}
