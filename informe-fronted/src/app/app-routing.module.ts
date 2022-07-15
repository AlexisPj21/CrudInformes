import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpportunityComponent } from './feature/opportunity/opportunity.component';
import { ProductComponent } from './feature/product/product.component';

const routes: Routes = [
  {path: 'opportunity' , component:OpportunityComponent},
  {path: 'opportunity/id', component:OpportunityComponent},
  {path: 'product' , component:ProductComponent},
  {path: 'product/:id', component:ProductComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
