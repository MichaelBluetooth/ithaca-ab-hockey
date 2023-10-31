import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramPanelComponent } from './instagram-panel.component';

describe('InstagramPanelComponent', () => {
  let component: InstagramPanelComponent;
  let fixture: ComponentFixture<InstagramPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramPanelComponent]
    });
    fixture = TestBed.createComponent(InstagramPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
