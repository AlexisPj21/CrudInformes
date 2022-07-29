import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { CampaignComponent } from './campaign/campaign.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { ProductComponent } from './product/form/product.component';
import { FormsModule } from '@angular/forms';
import { PersonComboboxComponent } from './person/person-combobox/person-combobox.component';
import { ProspectComponent } from './prospect/prospect.component';
import { ProductListComponent } from './product/list/product-list.component';
import { ProductToolbarComponent } from './product/product-toolbar/product-toolbar.component';
import { ProductSearchComponent } from './product/search/product-search.component';

@NgModule({
  declarations: [
  CampaignComponent,
  OpportunityComponent,
  ProductComponent,
  ProspectComponent,
  PersonComboboxComponent,
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
