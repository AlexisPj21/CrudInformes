import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OpportunityComponent } from './feature/opportunity/opportunity.component';
import { CampaignComponent } from './feature/campaign/campaign.component';

import { ProspectComponent } from './feature/prospect/prospect.component';
import { ProductComponent } from './feature/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    OpportunityComponent,
<<<<<<< HEAD
    CampaignComponent
=======

    ProspectComponent,
    ProductComponent

>>>>>>> 4d0c69530d6334b3cc698940a1902e0aa2577645
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
