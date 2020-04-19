import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

import { metaReducers, reducers} from '@app/store/reducers';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from '@dashboard/dashboard.component';
import { HeaderComponent } from '@header/header.component';
import { BreadcrumbComponent } from '@breadcrumb/breadcrumb.component';
import { MessagesComponent } from '@messages/messages.component';
import { LineSummaryComponent } from '@line-summary/line-summary.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        NgbNavModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        HeaderComponent,
        BreadcrumbComponent,
        MessagesComponent,
        LineSummaryComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
