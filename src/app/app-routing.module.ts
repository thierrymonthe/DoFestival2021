import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {ProgramPage} from './pages/program/program.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'contact', component: HomePage },
  { path: 'program', component: ProgramPage },
  { path: 'home', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
