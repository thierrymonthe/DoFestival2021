import {Component} from '@angular/core';

export interface Expert {
  imgSrc: string;
  name: string;
  content: string;
}

@Component({
  templateUrl: 'artist.page.html',
  styleUrls: ['artist.page.scss']
})
export class ArtistPage {
  items: Expert[] = [
    {
      imgSrc: '/assets/images/artist.jpg',
      content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam consequatur explicabo nobis pariatur,
            porro qui quis sapiente temporibus tenetur voluptates!
            Asperiores delectus ducimus enim fugit illo quaerat reprehenderit ullam vel.`,
      name: 'Vorname Nachname'
    },
    {
      imgSrc: '/assets/images/artist.jpg',
      content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam consequatur explicabo nobis pariatur,
            porro qui quis sapiente temporibus tenetur voluptates!
            Asperiores delectus ducimus enim fugit illo quaerat reprehenderit ullam vel.`,
      name: 'Vorname Nachname'
    },
    {
      imgSrc: '/assets/images/artist.jpg',
      content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam consequatur explicabo nobis pariatur,
            porro qui quis sapiente temporibus tenetur voluptates!
            Asperiores delectus ducimus enim fugit illo quaerat reprehenderit ullam vel.`,
      name: 'Vorname Nachname'
    },
    {
      imgSrc: '/assets/images/artist.jpg',
      content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam consequatur explicabo nobis pariatur,
            porro qui quis sapiente temporibus tenetur voluptates!
            Asperiores delectus ducimus enim fugit illo quaerat reprehenderit ullam vel.`,
      name: 'Vorname Nachname'
    },
    {
      imgSrc: '/assets/images/artist.jpg',
      content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam consequatur explicabo nobis pariatur,
            porro qui quis sapiente temporibus tenetur voluptates!
            Asperiores delectus ducimus enim fugit illo quaerat reprehenderit ullam vel.`,
      name: 'Vorname Nachname'
    },
    {
      imgSrc: '/assets/images/artist.jpg',
      content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam consequatur explicabo nobis pariatur,
            porro qui quis sapiente temporibus tenetur voluptates!
            Asperiores delectus ducimus enim fugit illo quaerat reprehenderit ullam vel.`,
      name: 'Vorname Nachname'
    },
    {
      imgSrc: '/assets/images/artist.jpg',
      content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam consequatur explicabo nobis pariatur,
            porro qui quis sapiente temporibus tenetur voluptates!
            Asperiores delectus ducimus enim fugit illo quaerat reprehenderit ullam vel.`,
      name: 'Vorname Nachname'
    },
    {
      imgSrc: '/assets/images/artist.jpg',
      content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam consequatur explicabo nobis pariatur,
            porro qui quis sapiente temporibus tenetur voluptates!
            Asperiores delectus ducimus enim fugit illo quaerat reprehenderit ullam vel.`,
      name: 'Vorname Nachname'
    },
    {
      imgSrc: '/assets/images/artist.jpg',
      content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aperiam consequatur explicabo nobis pariatur,
            porro qui quis sapiente temporibus tenetur voluptates!
            Asperiores delectus ducimus enim fugit illo quaerat reprehenderit ullam vel.`,
      name: 'Vorname Nachname'
    }
  ];
}
