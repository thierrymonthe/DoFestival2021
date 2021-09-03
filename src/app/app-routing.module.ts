import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {ProgramPage} from './pages/program/program.page';
import {ContactPage} from './pages/contact/contact.page';
import {AboutUsPage} from './pages/about-us/about-us.page';
import {ArtistPage} from './pages/artist/artist.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'contact', component: ContactPage },
  { path: 'program', component: ProgramPage },
  { path: 'about-us', component: AboutUsPage },
  { path: 'artist', component: ArtistPage },
  { path: 'home', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
