import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryContentComponent } from './secondary-content.component';

describe('SecondaryContentComponent', () => {
  let component: SecondaryContentComponent;
  let fixture: ComponentFixture<SecondaryContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryContentComponent]
    });
    fixture = TestBed.createComponent(SecondaryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
