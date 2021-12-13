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
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'de');

@NgModule({
  declarations: [
    AppComponent,
    CookieBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PageModule,
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [EmailService, {provide: LOCALE_ID, useValue: 'de' },
    {
    provide: 'window',
    useValue: window,
    },
    {
      provide: 'document',
      useValue: document,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
