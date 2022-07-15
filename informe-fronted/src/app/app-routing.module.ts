import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpportunityComponent } from './feature/opportunity/opportunity.component';
import { ProspectComponent } from './feature/prospect/prospect.component';

const routes: Routes = [
  {path: 'prospect', component:ProspectComponent},
  {path: 'prospect/:id', component:ProspectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
