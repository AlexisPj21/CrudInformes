import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  currentProduct: Product = {
    productId: 0,
    name: "" ,
    description: "",
    brand: "",
    model : "",
    created:new Date(),
    updated:new Date(),
    enable: false
  };

  constructor(
    private productService: ProductService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params)=>{
        let productoId:string="";
        if (params.get("id")){
          productoId = params.get("id")!;
          this.findById(parseInt(productoId));
        }
      }
    )
  }

  save(): void {
    this.productService.save(this.currentProduct)
    .subscribe(
      (response) => {
        console.log("registro guardado");
        this.currentProduct = {
          productId: 0,
          name: "" ,
          description: "",
          brand: "",
          model : "",
          created:new Date(),
          updated:new Date(),
          enable: false
        };
      }
    )
  }

  findById(productId: number): void{
    this.productService.findById(productId)
    .subscribe(
      (response: Product) => {
        console.log("registro encontrado");
        this.currentProduct=response
      }
    )
  }


}
