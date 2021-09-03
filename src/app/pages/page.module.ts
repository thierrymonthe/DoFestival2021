import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactPage} from './contact/contact.page';
import {HomePage} from './home/home.page';
import {NotFoundPage} from './not-found/not-found.page';
import {ProgramPage} from './program/program.page';
import {SharedModule} from '../shared';
import {AboutUsPage} from './about-us/about-us.page';
import {ArtistPage} from './artist/artist.page';

@NgModule({
  imports: [ CommonModule, SharedModule ],
  declarations: [ ContactPage, HomePage, NotFoundPage, ProgramPage, AboutUsPage, ArtistPage ]
})
export class PageModule {

}
