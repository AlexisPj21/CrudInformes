import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ProductRelated } from '../product-related';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  currentProduct:Product = this.resetProduct();


  constructor(
    private productService: ProductService,
    private activedRoute: ActivatedRoute,
    private route:Router,

  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params)=>{
        let productId:string="";
        if (params.get("id")){
          productId = params.get("id")!;
          this.findById(parseInt(productId));
        }
      }
    )
  }

  save(): void {
    this.productService.save(this.currentProduct)
    .subscribe(
      (response) => {
        console.log("registro guardado");
        this.currentProduct= this.resetProduct();
        this.route.navigate(['/layout.product-list']);

      }
    )
  }

  findById(productId: number): void{
    this.productService.findById(productId)
    .subscribe(
      (response: Product) => {
        console.log("registro encontrado");
        this.currentProduct=response;
        this.currentProduct.products.forEach(
         (item) => {
          this.productService.findById(item.relatedId).subscribe(
            (products: Product) => item.name = products.name
          )
         }
        )
      }
    )
  }
///

  resetProduct(){
    return this.currentProduct = {
      productId: 0,
      name: "" ,
      description: "",
      brand: "",
      model : "",
      created:new Date(),
      updated:new Date(),
      enable: false,
      personId: 0,
      //persons: [],
      products: []
   }
   }


   /*onSelect(product: Product): void {
    this.currentProduct.products.push(product);
  }*/
  removeProduct(id: number){
    this.currentProduct.products = this.currentProduct.products.filter(
      (item) => item.productId != id
    )
  }


  onSelect(products:Product): void{
    let productrelated:ProductRelated={productId:this.currentProduct.productId,
      id:0,relatedId:products.productId,
       name:products.name};
    this.currentProduct.products.push(productrelated)
  }

}


