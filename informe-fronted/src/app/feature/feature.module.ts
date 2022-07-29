import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { CampaignComponent } from './campaign/campaign.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { ProductComponent } from './product/product.component';
import { PersonComboboxComponent } from './person/person-combobox/person-combobox.component';
import { ProspectComponent } from './prospect/form/prospect.component';
import { FormsModule } from '@angular/forms';
import { ProspectToolbarComponent } from './prospect/prospect-toolbar/prospect-toolbar.component';
import { ProspectListComponent } from './prospect/list/prospect-list.component';
import { PersonSearchComponent } from './person/search/person-search.component';



@NgModule({
  declarations: [
  CampaignComponent,
  OpportunityComponent,
  ProductComponent,
  ProspectComponent,
  PersonComboboxComponent,
  ProspectToolbarComponent,
  ProspectListComponent,
  PersonSearchComponent,



  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
     FormsModule
  ]
})
export class FeatureModule { }
