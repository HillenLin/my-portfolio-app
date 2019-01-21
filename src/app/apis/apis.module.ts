import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherAPIComponent } from './weather-api/weather-api.component';
import { MarvelDeveloperPortalComponent } from './marvel-developer-portal/marvel-developer-portal.component';
import { NASAOpenAPIsComponent } from './nasaopen-apis/nasaopen-apis.component';
import { ApiPortalComponent } from './api-portal/api-portal.component';
import { ApisRoutingModule } from './apis.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ApisRoutingModule
  ],
  declarations: [WeatherAPIComponent, MarvelDeveloperPortalComponent, NASAOpenAPIsComponent, ApiPortalComponent]
})
export class ApisModule { }
