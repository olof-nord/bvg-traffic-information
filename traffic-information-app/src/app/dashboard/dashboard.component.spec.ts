import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { metaReducers, reducers} from '@app/store/reducers';

import { DashboardComponent } from './dashboard.component';
import { BreadcrumbComponent } from '@breadcrumb/breadcrumb.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, { metaReducers })
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
