import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommercialProjectsComponent } from './commercial-projects/commercial-projects.component';


const routes: Routes = [
  {
    path: '',
    component: CommercialProjectsComponent,
    children: [
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
