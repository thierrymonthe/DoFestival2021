import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {ProgramPage} from './pages/program/program.page';
import {ContactPage} from './pages/contact/contact.page';
import {AboutUsPage} from './pages/about-us/about-us.page';
import {ArtistPage} from './pages/artist/artist.page';
import { HomeDetailsPage} from './pages/home-details/home-details.page';
import {RouteGuardGuard} from './services/guard/route-guard.guard';
import {AccessPage} from './pages/access/access.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'login', component: AccessPage, canActivate: [RouteGuardGuard] },
  { path: 'contact', component: ContactPage, canActivate: [RouteGuardGuard] },
  { path: 'program', component: ProgramPage, canActivate: [RouteGuardGuard] },
  { path: 'about-us', component: AboutUsPage, canActivate: [RouteGuardGuard] },
  { path: 'artist', component: ArtistPage, canActivate: [RouteGuardGuard] },
  { path: 'home-details', component: HomeDetailsPage, canActivate: [RouteGuardGuard] },
  { path: 'home', redirectTo: '', pathMatch: 'full', canActivate: [RouteGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
