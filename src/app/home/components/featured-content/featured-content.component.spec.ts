import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedContentComponent } from './featured-content.component';

describe('FeaturedContentComponent', () => {
  let component: FeaturedContentComponent;
  let fixture: ComponentFixture<FeaturedContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedContentComponent]
    });
    fixture = TestBed.createComponent(FeaturedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
