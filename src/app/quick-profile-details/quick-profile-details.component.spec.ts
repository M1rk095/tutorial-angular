import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickProfileDetailsComponent } from './quick-profile-details.component';

describe('QuickProfileDetailsComponent', () => {
  let component: QuickProfileDetailsComponent;
  let fixture: ComponentFixture<QuickProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickProfileDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
