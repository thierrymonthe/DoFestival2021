import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactPage} from './contact/contact.page';
import {HomePage} from './home/home.page';
import {NotFoundPage} from './not-found/not-found.page';
import {ProgramPage} from './program/program.page';
import {SharedModule} from '../shared';

@NgModule({
  imports: [ CommonModule, SharedModule ],
  declarations: [ ContactPage, HomePage, NotFoundPage, ProgramPage ]
})
export class PageModule {

}
