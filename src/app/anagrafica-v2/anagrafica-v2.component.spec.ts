import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficaV2Component } from './anagrafica-v2.component';

describe('AnagraficaV2Component', () => {
  let component: AnagraficaV2Component;
  let fixture: ComponentFixture<AnagraficaV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagraficaV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagraficaV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
