import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsPanelComponent } from './standings-panel.component';

describe('StandingsPanelComponent', () => {
  let component: StandingsPanelComponent;
  let fixture: ComponentFixture<StandingsPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandingsPanelComponent]
    });
    fixture = TestBed.createComponent(StandingsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
