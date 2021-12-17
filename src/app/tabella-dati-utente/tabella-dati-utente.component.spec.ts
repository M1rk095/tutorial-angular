import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaDatiUtenteComponent } from './tabella-dati-utente.component';

describe('TabellaDatiUtenteComponent', () => {
  let component: TabellaDatiUtenteComponent;
  let fixture: ComponentFixture<TabellaDatiUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabellaDatiUtenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellaDatiUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
