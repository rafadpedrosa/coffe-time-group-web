import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-indicator-bar',
  templateUrl: './status-indicator-bar.component.html',
  styleUrls: [ './status-indicator-bar.component.scss' ]
})
export class StatusIndicatorBarComponent implements OnInit {

  @Input() statusIndicator: number;
  @Input() statusName: number;

  constructor() {
  }

  ngOnInit() {
  }

}
