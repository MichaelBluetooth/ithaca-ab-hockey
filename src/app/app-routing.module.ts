import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'standings',
    loadChildren: () => import('./standings/standings.module').then(m => m.StandingsModule)
  },
  {
    path: 'sponsors',
    loadChildren: () => import('./sponsors/sponsors.module').then(m => m.SponsorsModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule)
  },
  {
    path: 'rosters',
    loadChildren: () => import('./rosters/rosters.module').then(m => m.RostersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
