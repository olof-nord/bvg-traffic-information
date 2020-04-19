import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { metaReducers, reducers} from '@app/store/reducers';

import { NgbAlertModule, NgbNavModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';
import { BreadcrumbComponent } from '@breadcrumb/breadcrumb.component';
import { LinesComponent } from '@lines/lines.component';
import { LineSummaryComponent } from '@line-summary/line-summary.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        NgbProgressbarModule,
        NgbAlertModule,
        NgbNavModule
      ],
      declarations: [
        DashboardComponent,
        BreadcrumbComponent,
        LinesComponent,
        LineSummaryComponent
      ]
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should have a title', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toEqual('Traffic Status');
  });

  it('should contain the four different traffic type tabs', () => {
    expect(fixture.nativeElement.querySelectorAll('.nav-item').length)
      .toEqual(4);
  });

});
