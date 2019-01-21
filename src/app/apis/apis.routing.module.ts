import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiPortalComponent } from './api-portal/api-portal.component';
import { WeatherAPIComponent } from './weather-api/weather-api.component';
import { NASAOpenAPIsComponent } from './nasaopen-apis/nasaopen-apis.component';
import { MarvelDeveloperPortalComponent } from './marvel-developer-portal/marvel-developer-portal.component';


const routes: Routes = [
  {
    path: '',
    component: ApiPortalComponent,
    children: [
      {
        path: 'weather',
        component: WeatherAPIComponent,
      },
      {
        path: 'nasa',
        component: NASAOpenAPIsComponent,
      },
      {
        path: 'marvel',
        component: MarvelDeveloperPortalComponent,
      },
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApisRoutingModule { }
