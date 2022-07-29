import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProspectListComponent } from '../feature/prospect/list/prospect-list.component';
import { ProspectComponent } from '../feature/prospect/form/prospect.component';


const routes: Routes = [
  {path: '', component:MainComponent,
  children: [
    {path: '', component:DashboardComponent},
    {path: 'dashboard',component:DashboardComponent},
    {path: 'prospect-list',component:ProspectListComponent},
    {path: 'prospect-form',component:ProspectComponent},
    {path: 'prospect-form/:id',component:ProspectComponent}


  ],


}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
