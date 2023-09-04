import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPanelComponent } from './community-panel.component';

describe('CommunityPanelComponent', () => {
  let component: CommunityPanelComponent;
  let fixture: ComponentFixture<CommunityPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityPanelComponent]
    });
    fixture = TestBed.createComponent(CommunityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
