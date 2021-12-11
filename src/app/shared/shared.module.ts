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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FestivalSnackbarComponent} from './snacbar/festival-snackbar.component';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
    imports: [CommonModule, RouterModule, OverlayModule, MatSnackBarModule, MatMenuModule],
  declarations: [LayoutComponent, HeaderComponent, Circle, Rectangle, ProgramItem, CategoryComponent,
    FooterComponent, DropdownMenu, FestivalSnackbarComponent],
  exports: [LayoutComponent, HeaderComponent, Circle, Rectangle, ProgramItem, CategoryComponent, FooterComponent]
})
export class SharedModule {

}
