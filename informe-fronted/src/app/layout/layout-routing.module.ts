import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpportunityComponent } from '../feature/opportunity/opportunity-form/opportunity.component';
import { OpportunityListComponent } from '../feature/opportunity/opportunity-list/opportunity-list.component';


const routes: Routes = [
  {path: '', component:MainComponent,
  children: [
    {path: '', component:DashboardComponent},
    {path: 'dashboard',component:DashboardComponent},
    {path: 'opportunity-list', component:OpportunityListComponent},
    {path: 'opportunity-form', component:OpportunityComponent},
    {path: 'opportunity-form/:id', component:OpportunityComponent}


  ],


}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
