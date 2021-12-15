import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetV2Component } from './widget-v2.component';

describe('WidgetV2Component', () => {
  let component: WidgetV2Component;
  let fixture: ComponentFixture<WidgetV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
