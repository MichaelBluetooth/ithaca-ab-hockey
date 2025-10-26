import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreModule } from './core/core.module';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

export function loadSheetData(sheetDataService: DataService) {
  return () => sheetDataService.loadData();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadSheetData,
      deps: [DataService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
