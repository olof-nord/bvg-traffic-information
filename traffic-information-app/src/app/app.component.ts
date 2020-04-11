import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FgiService } from '@api/services';
import { Message } from '@api/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  messages$: Observable<Array<Message>>;

  constructor(private fgiService: FgiService) { }

  ngOnInit(): void {
    this.messages$ = this.fgiService.getFgi({ datum: '2018-02-27T12:50:47' });
  }

}
