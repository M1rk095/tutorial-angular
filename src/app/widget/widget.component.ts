import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input() title = '';
  @Output() clickOnTitle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitClickOnTitle() {
    return this.clickOnTitle.emit();
  }

}
