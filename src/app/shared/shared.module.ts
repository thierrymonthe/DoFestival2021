import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {HeaderComponent} from './header/header.component';
import {Circle} from './circle/circle';
import {Rectangle} from './rectangle/rectangle';
import {ProgramItem} from './program-item/program-item';
import {RouterModule} from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {FooterComponent} from './footer/footer.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {DropdownMenu} from './dropdown-menu/dropdown-menu';

@NgModule({
  imports: [CommonModule, RouterModule, OverlayModule],
  declarations: [LayoutComponent, HeaderComponent, Circle, Rectangle, ProgramItem, CategoryComponent, FooterComponent, DropdownMenu],
  exports: [LayoutComponent, HeaderComponent, Circle, Rectangle, ProgramItem, CategoryComponent, FooterComponent]
})
export class SharedModule {

}
