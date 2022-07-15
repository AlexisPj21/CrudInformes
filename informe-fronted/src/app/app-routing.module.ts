import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './feature/campaign/campaign.component';
import { OpportunityComponent } from './feature/opportunity/opportunity.component';

const routes: Routes = [
  {path: 'opportunity' , component:OpportunityComponent},
  {path: 'opportunity/id', component:OpportunityComponent},
  {path: 'campaign', component:CampaignComponent},
  {path: 'campaign/:id', component:CampaignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
