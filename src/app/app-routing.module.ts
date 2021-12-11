import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {ProgramPage} from './pages/program/program.page';
import {ContactPage} from './pages/contact/contact.page';
import {AboutUsPage} from './pages/about-us/about-us.page';
import {ArtistPage} from './pages/artist/artist.page';
import {HomeDetailsPage} from './pages/home-details/home-details.page';
import {ProgramDetailComponent} from './pages/program-detail/program-detail.component';
import {ImpressumPage} from './pages/Impressum/impressum.page';
import {DatenschutzPage} from './pages/datenschutz/datenschutz.page';
import { PrecedentEditionPage} from './pages/precedent-edition/precedent-edition.component';

const routes: Routes = [
  {path: '', component: PrecedentEditionPage},
  {path: 'contact', component: ContactPage},
  {path: 'program', component: ProgramPage},
  {path: 'program-detail/:id', component: ProgramDetailComponent},
  {path: 'about-us', component: AboutUsPage},
  {path: 'expert', component: ArtistPage},
  {path: 'impressum', component: ImpressumPage},
  {path: 'datenschutz', component: DatenschutzPage},
  {path: 'home-details/:id', component: HomeDetailsPage},
  {path: 'summary', component: PrecedentEditionPage},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
