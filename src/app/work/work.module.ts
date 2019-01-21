import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommercialProjectsComponent } from './commercial-projects/commercial-projects.component';
import { WorkRoutingModule } from './work.routing.module';

@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule
  ],
  declarations: [CommercialProjectsComponent]
})
export class WorkModule { }
