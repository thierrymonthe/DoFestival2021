import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared';
import {PageModule} from './pages/page.module';
import {EmailService} from './services/email.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/de';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'de');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PageModule,
    BrowserAnimationsModule,
  ],
  providers: [EmailService, {provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
