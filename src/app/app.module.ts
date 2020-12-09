import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { HeaderComponent } from './podcasts/header/header.component';
import { SummaryComponent } from './podcasts/summary/summary.component';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    PodcastsComponent,
    HeaderComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
