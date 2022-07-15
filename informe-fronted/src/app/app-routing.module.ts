import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './feature/campaign/campaign.component';
import { OpportunityComponent } from './feature/opportunity/opportunity.component';
import { ProspectComponent } from './feature/prospect/prospect.component';
import { ProductComponent } from './feature/product/product.component';


const routes: Routes = [
  {path: 'opportunity' , component:OpportunityComponent},
  {path: 'opportunity/id', component:OpportunityComponent},
  {path: 'campaign', component:CampaignComponent},
  {path: 'campaign/:id', component:CampaignComponent},
  {path: 'product' , component:ProductComponent},
  {path: 'product/:id', component:ProductComponent},
  {path: 'prospect', component:ProspectComponent},
  {path: 'prospect/:id', component:ProspectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
