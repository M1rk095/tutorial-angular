import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatoriDetailsComponent } from './indicatori-details.component';

describe('IndicatoriDetailsComponent', () => {
  let component: IndicatoriDetailsComponent;
  let fixture: ComponentFixture<IndicatoriDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatoriDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatoriDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
