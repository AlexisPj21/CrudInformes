import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { CampaignComponent } from './campaign/campaign.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { PersonComboboxComponent } from './person/person-combobox/person-combobox.component';


@NgModule({
  declarations: [
  CampaignComponent,
  OpportunityComponent,
  ProductComponent,
  ProductComponent,
  PersonComboboxComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
