import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  templateUrl: 'home-image.page.html',
  styleUrls: ['home-image.page.scss']
})
export class HomeImagePage implements OnInit {

  @ViewChild('image')
  image: ElementRef<HTMLElement>;

  height: number = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.height = this.image?.nativeElement.getBoundingClientRect().height;
    }, 100);

    window.addEventListener('resize', () => {
      this.height = this.image?.nativeElement.getBoundingClientRect().height;
    });
  }

}
