import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FeaturedContentComponent } from './components/featured-content/featured-content.component';
import { SecondaryContentComponent } from './components/secondary-content/secondary-content.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { StandingsPanelComponent } from './components/standings-panel/standings-panel.component';
import { SponsorsPanelComponent } from './components/sponsors-panel/sponsors-panel.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { CommunityPanelComponent } from './components/community-panel/community-panel.component';
import { CalendarPanelComponent } from './components/calendar-panel/calendar-panel.component';
import { DocumentsPanelComponent } from './components/documents-panel/documents-panel.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
    FeaturedContentComponent,
    SecondaryContentComponent,
    RightSideComponent,
    StandingsPanelComponent,
    SponsorsPanelComponent,
    LeftSideComponent,
    CommunityPanelComponent,
    CalendarPanelComponent,
    DocumentsPanelComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    CoreModule
  ]
})
export class HomeModule { }
