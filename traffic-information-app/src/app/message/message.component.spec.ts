import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { Message } from '@api/models';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  const ubahnMessage: Message = {
    meldungsId: 'BVG258847',
    datum: '2020-04-07T07:57:41',
    type: 0,
    verkehrsmittel: 1,
    linie: 'U1',
    gueltigVonDatum: '2020-04-14',
    gueltigBisDatum: '2020-06-15',
    prioritaet: 1,
    grundFahrplanabweichung: 2
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessageComponent
      ]
    });

    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    component.message = ubahnMessage;
    fixture.detectChanges();
  }));

  it('should show the expected information', () => {
    expect(fixture.nativeElement.querySelectorAll('.bvg-impact').length)
      .toEqual(1);

    expect(fixture.nativeElement.querySelectorAll('.bvg-valid-from').length)
      .toEqual(1);
  });
});
