import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, forwardRef } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';

import { ApiModule } from '@api/api.module';
import { ApiKeyInterceptor } from '@config/interceptor/api-key.interceptor';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { reducers, metaReducers } from '@store/reducers/index';
import { MessageEffects } from '@store/effects/message.effects';

import { environment } from '@environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from '@dashboard/dashboard.component';
import { HeaderComponent } from '@header/header.component';
import { BreadcrumbComponent } from '@breadcrumb/breadcrumb.component';
import { MessagesComponent } from '@messages/messages.component';
import { LinesComponent } from '@lines/lines.component';
import { LineSummaryComponent } from '@line-summary/line-summary.component';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiKeyInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    BreadcrumbComponent,
    MessagesComponent,
    LinesComponent,
    LineSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule,
    NgbModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([MessageEffects])
  ],
  providers: [
    ApiKeyInterceptor,
    API_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
