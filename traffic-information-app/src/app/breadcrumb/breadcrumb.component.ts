import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input()
  items: string[];

  constructor() {}

  ngOnInit(): void {
    if (this.items.length !== 3) {
      throw new console.error('This component is currently built for three elements');
    }
  }

}
