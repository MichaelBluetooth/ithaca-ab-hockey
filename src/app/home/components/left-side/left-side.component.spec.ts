import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideComponent } from './left-side.component';

describe('LeftSideComponent', () => {
  let component: LeftSideComponent;
  let fixture: ComponentFixture<LeftSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftSideComponent]
    });
    fixture = TestBed.createComponent(LeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
