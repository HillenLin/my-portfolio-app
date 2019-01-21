import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechComponent } from './tech/tech.component';
import { TechRoutingModule } from './tech.routing.module';

@NgModule({
  imports: [
    CommonModule,
    TechRoutingModule
  ],
  declarations: [TechComponent]
})
export class TechModule { }
