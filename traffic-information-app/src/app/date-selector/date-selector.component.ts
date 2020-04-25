import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent implements OnInit {

  selectedDate: NgbDateStruct;
  faCalendarAlt = faCalendarAlt;

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
    this.selectedDate = this.calendar.getToday();
  }

}
