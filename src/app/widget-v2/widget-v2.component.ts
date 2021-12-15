import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-v2',
  templateUrl: './widget-v2.component.html',
  styleUrls: ['./widget-v2.component.scss']
})
export class WidgetV2Component implements OnInit {

  @Input() nome?: string;
  @Input() ID?: string;
  @Input() NSG?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
