import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsPanelComponent } from './sponsors-panel.component';

describe('SponsorsPanelComponent', () => {
  let component: SponsorsPanelComponent;
  let fixture: ComponentFixture<SponsorsPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorsPanelComponent]
    });
    fixture = TestBed.createComponent(SponsorsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
