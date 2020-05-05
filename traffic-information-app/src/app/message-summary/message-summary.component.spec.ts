import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MessageSummaryComponent } from './message-summary.component';
import { Message } from '@api/models';

describe('MessageComponent', () => {
  let component: MessageSummaryComponent;
  let fixture: ComponentFixture<MessageSummaryComponent>;

  const ubahnMessage: Message = {
    meldungsId: 'BVG258847',
    datum: '2020-04-07T07:57:41',
    type: 0,
    verkehrsmittel: 1,
    linie: 'U1',
    gueltigVonDatum: '2020-04-14',
    gueltigVonZeit: '00:00:00',
    gueltigBisDatum: '2020-06-15',
    gueltigBisZeit: '00:00:00',
    prioritaet: 1,
    grundFahrplanabweichung: 2
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule
      ],
      declarations: [
        MessageSummaryComponent
      ]
    });

    fixture = TestBed.createComponent(MessageSummaryComponent);
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
