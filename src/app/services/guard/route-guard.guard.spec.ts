import { TestBed, async, inject } from '@angular/core/testing';

import { RouteGuardGuard } from './route-guard.guard';
import { testModuleConfigurationWithoutSecurity , MockNkapHttpService , MockDataService, MockUserAppService, UnitTestComponent, MockMatDialogRef} from 'src/test/test-utils.spec';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { UserAppService } from 'src/app/services/user-app.service';
import { NkapHttpService } from 'src/app/services/nkap-http.service';
import { HttpLoaderFactory } from '../app.module';
import { DataService } from '../components/apointment/apointment-edit/data-service';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MatSnackBar, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_DIALOG_DATA, MatDialogRef, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';

describe('RouteGuardGuard', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UnitTestComponent,
      ],
      imports :[
        BrowserModule, BrowserAnimationsModule,MatDialogModule,
        HttpClientModule, ReactiveFormsModule, MatSnackBarModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        RouterModule.forRoot([
          {path:"", component: UnitTestComponent}
        ])
      ],
      providers: [RouteGuardGuard, 
        {provide: APP_BASE_HREF, useValue : '/' },
        { provide: MAT_DIALOG_DATA, useValue: {}},
        { provide: MatDialogRef, useClass: MockMatDialogRef },
        {provide: OverlayContainer, useClass: FullscreenOverlayContainer},// for overlay when long process
        {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000, verticalPosition: 'top', horizontalPosition:  'center'}},// for the notification popup that render alert/error
        {provide: UserAppService, useClass: MockUserAppService}, // to have all acces on buttons
        {provide: NkapHttpService, useClass: MockNkapHttpService}, // to get data send to the server
        {provide: DataService, useClass: MockDataService}, // to get data send to the server]
      ]
    });
  });

  it('should ...', inject([RouteGuardGuard], (guard: RouteGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
