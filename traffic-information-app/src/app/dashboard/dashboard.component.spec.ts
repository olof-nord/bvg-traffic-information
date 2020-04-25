import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { metaReducers, reducers} from '@app/store/reducers';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardComponent } from './dashboard.component';
import { BreadcrumbComponent } from '@breadcrumb/breadcrumb.component';
import { LinesComponent } from '@lines/lines.component';
import { LineSummaryComponent } from '@line-summary/line-summary.component';
import { DateSelectorComponent } from '@date-selector/date-selector.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        NgbModule,
        FormsModule,
        FontAwesomeModule
      ],
      declarations: [
        DashboardComponent,
        BreadcrumbComponent,
        LinesComponent,
        LineSummaryComponent,
        DateSelectorComponent
      ]
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should have a title', () => {
    expect(fixture.nativeElement.querySelectorAll('h2').length).toBeGreaterThanOrEqual(1);
  });

  it('should contain the four different traffic type tabs', () => {
    expect(fixture.nativeElement.querySelectorAll('.nav-item').length)
      .toEqual(4);
  });

});
