import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { TravelComponent } from './travel/travel.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ProjectsComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighchartsChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
