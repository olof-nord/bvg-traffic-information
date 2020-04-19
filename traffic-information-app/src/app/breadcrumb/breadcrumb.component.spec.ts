import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    component.items = ['first', 'second', 'third'];
    fixture.detectChanges();

  }));

  it('should contain the elements given as input', () => {
    expect(fixture.nativeElement.querySelectorAll('.breadcrumb-item').length)
      .toBeGreaterThanOrEqual(3);
  });
});
