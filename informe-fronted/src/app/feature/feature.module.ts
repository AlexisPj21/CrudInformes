import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { CampaignComponent } from './campaign/campaign.component';
import { OpportunityComponent } from './opportunity/opportunity-form/opportunity.component';
import { FormsModule } from '@angular/forms';
import { PersonComboboxComponent } from './person/person-combobox/person-combobox.component';
import { ProspectComponent } from './prospect/prospect.component';
import { OpportunityListComponent } from './opportunity/opportunity-list/opportunity-list.component';
import { OpportunityToolbarComponent } from './opportunity/opportunity-toolbar/opportunity-toolbar.component';
import { ProspectComboboxComponent } from './prospect/prospect-combobox/prospect-combobox.component';
import { ProductSearchComponent } from './product/product-search/product-search.component';

import { ProductComponent } from './product/form/product.component';
import { ProductListComponent } from './product/list/product-list.component';
import { ProductToolbarComponent } from './product/product-toolbar/product-toolbar.component';

@NgModule({
  declarations: [
  CampaignComponent,
  OpportunityComponent,
  ProductComponent,
  ProspectComponent,
  PersonComboboxComponent,
  OpportunityToolbarComponent,
  OpportunityListComponent,
  ProspectComboboxComponent,
  ProductListComponent,
  ProductToolbarComponent,
  ProductSearchComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
