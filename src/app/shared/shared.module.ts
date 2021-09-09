import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './header/header.component';
import {Circle} from './circle/circle';
import {Rectangle} from './rectangle/rectangle';
import {ProgramItem} from './program-item/program-item';
import {RouterModule} from '@angular/router';
import {CategoryComponent} from './category/category.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LayoutComponent, HeaderComponent, Circle, Rectangle, ProgramItem, CategoryComponent],
  exports: [LayoutComponent, HeaderComponent, Circle, Rectangle, ProgramItem, CategoryComponent]
})
export class SharedModule {

}
