import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatLeadersComponent } from './stat-leaders.component';

describe('StatLeadersComponent', () => {
  let component: StatLeadersComponent;
  let fixture: ComponentFixture<StatLeadersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatLeadersComponent]
    });
    fixture = TestBed.createComponent(StatLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
