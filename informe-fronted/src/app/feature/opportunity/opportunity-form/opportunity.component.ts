import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product/product';
import { ProductService } from '../../product/product.service';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html'
})
export class OpportunityComponent implements OnInit {

  currentOpportunity: Opportunity = this.resetOpportunity();

  constructor(
    private opportunityService: OpportunityService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        let id:string = "";
        if (params.get("id")){
          id = params.get("id")!;
          this.findById(parseInt(id));
        }
      }
    )
  }

  save():void{
    this.opportunityService.save(this.currentOpportunity)
    .subscribe((response) => {console.log("Guardado exitosamente");
    this.currentOpportunity = this.resetOpportunity();
    this.router.navigate(['/layout/opportunity-list']);
  })
  }

  findById(id: number): void{
    this.opportunityService.findById(id)
    .subscribe(
      (response: Opportunity) => {
        this.currentOpportunity = response;
        this.currentOpportunity.products.forEach(
          (item) => {
            this.productService.findById(item.productId).subscribe(
              (product:Product) => item.name = product.name
            )
          }
        )
      }
    )
  }

  delete():void{
    this.opportunityService.deleteById(this.currentOpportunity.opportunityId)
    .subscribe(
      () => {
        console.log("Registro eliminado");
        this.currentOpportunity = this.resetOpportunity();
      }
    )
  }

  resetOpportunity(){
    return this.currentOpportunity = {
      opportunityId: 0,
      prospectId: 0,
      stageId: 0,
      vendorId: 0,
      campaignId: 0,
      amount: 0,
      description: "",
      created: new Date(),
      updated: new Date(),
      enable: false,
      products: []
    }
  }

  onSelect(product: Product): void {
    this.currentOpportunity.products.push(product);
  }

  removeProduct(id: number){
    this.currentOpportunity.products = this.currentOpportunity.products.filter(
      (item) => item.productId != id
    )
  }

}
