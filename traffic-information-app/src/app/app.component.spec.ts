import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';

import { metaReducers, reducers} from '@app/store/reducers';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from '@dashboard/dashboard.component';
import { HeaderComponent } from '@header/header.component';
import { BreadcrumbComponent } from '@breadcrumb/breadcrumb.component';
import { MessageSummaryComponent } from '@message-summary/message-summary.component';
import { LineSummaryComponent } from '@line-summary/line-summary.component';
import { DateSelectorComponent } from '@date-selector/date-selector.component';


describe('AppComponent', () => {

  registerLocaleData(localeDe, 'de-DE', localeDeExtra);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        NgbNavModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        HeaderComponent,
        BreadcrumbComponent,
        MessageSummaryComponent,
        LineSummaryComponent,
        DateSelectorComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
