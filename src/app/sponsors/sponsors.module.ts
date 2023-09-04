import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SponsorsComponent
  ],
  imports: [
    CommonModule,
    SponsorsRoutingModule,
    HttpClientModule
  ]
})
export class SponsorsModule { }
