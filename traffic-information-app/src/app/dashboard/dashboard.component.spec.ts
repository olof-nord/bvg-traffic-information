import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { metaReducers, reducers} from '@app/store/reducers';

import { NgbAlertModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';
import { BreadcrumbComponent } from '@breadcrumb/breadcrumb.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        NgbProgressbarModule,
        NgbAlertModule
      ],
      declarations: [
        DashboardComponent,
        BreadcrumbComponent
      ]
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should have a title', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toEqual('Traffic Status');
  });

});
