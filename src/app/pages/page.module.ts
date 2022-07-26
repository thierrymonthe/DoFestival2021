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
import {ProgramDetailComponent} from './program-detail/program-detail.component';
import {ImpressumPage} from './Impressum/impressum.page';
import {DatenschutzPage} from './datenschutz/datenschutz.page';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PrecedentEditionPage } from './precedent-edition/precedent-edition.component';
import {MatIconModule} from '@angular/material/icon';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ProgramNComponent } from './program-n/program-n.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule, HttpClientModule, ReactiveFormsModule, MatProgressSpinnerModule, MatIconModule, IvyCarouselModule],
  declarations: [ContactPage, HomePage, NotFoundPage, ProgramPage, AboutUsPage, ArtistPage, HomeDetailsPage, AccessPage, ProgramDetailComponent, ImpressumPage, DatenschutzPage, PrecedentEditionPage, ProgramNComponent]
})
export class PageModule {

}
