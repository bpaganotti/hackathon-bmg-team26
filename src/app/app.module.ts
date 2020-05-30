import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { PagesModule } from "./pages/pages.module";
import { DataService } from './services/data.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    PagesModule,
    PipesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxGoogleAnalyticsModule.forRoot('UA-167267038-1')
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
