import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactPage} from './contact/contact.page';
import {HomePage} from './home/home.page';
import {NotFoundPage} from './not-found/not-found.page';
import {ProgramPage} from './program/program.page';
import {SharedModule} from '../shared';
import {AboutUsPage} from './about-us/about-us.page';
import {ArtistPage} from './artist/artist.page';
import {AccessPage} from './access/access.page';
import {RouterModule} from '@angular/router';
import {HomeDetailsPage} from './home-details/home-details.page';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ProgramDetailComponent } from './program-detail/program-detail.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule, HttpClientModule, ReactiveFormsModule],
  declarations: [ContactPage, HomePage, NotFoundPage, ProgramPage, AboutUsPage, ArtistPage, HomeDetailsPage, AccessPage, ProgramDetailComponent]
})
export class PageModule {

}
