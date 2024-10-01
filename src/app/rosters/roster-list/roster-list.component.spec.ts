import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterListComponent } from './roster-list.component';

describe('RosterListComponent', () => {
  let component: RosterListComponent;
  let fixture: ComponentFixture<RosterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RosterListComponent]
    });
    fixture = TestBed.createComponent(RosterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
