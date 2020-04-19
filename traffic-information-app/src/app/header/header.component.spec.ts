import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbCollapseModule
      ],
      declarations: [
        HeaderComponent
      ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should render the navbar', () => {
    expect(fixture.nativeElement.querySelector('.navbar'))
      .toBeTruthy();
  });

  it('should render the navbar icon', () => {
    expect(fixture.nativeElement.querySelector('.navbar-brand'))
      .toBeTruthy();
  });

  it('should contain the six elements', () => {
    expect(fixture.nativeElement.querySelectorAll('.nav-item').length)
      .toEqual(6);
  });

});
