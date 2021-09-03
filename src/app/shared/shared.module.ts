import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './header/header.component';
import {Circle} from './circle/circle';
import {Rectangle} from './rectangle/rectangle';
import {ProgramItem} from './program-item/program-item';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ LayoutComponent, HeaderComponent, Circle, Rectangle, ProgramItem ],
  exports: [ LayoutComponent, HeaderComponent, Circle, Rectangle, ProgramItem ]
})
export class SharedModule {

}
