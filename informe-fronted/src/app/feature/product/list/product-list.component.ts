import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  constructor(
    private ProductService: ProductService
  ) { }

  products: Product[] = [];

  ngOnInit(): void {

    this.findAll();
  }

  findAll():void {
    this.ProductService.findAll().subscribe(
      (response) => {
        this.products = response;
      }
    );
  }
  findByName(term:string){
    if(term.length===0){
      this.findAll();
    }

    if(term.length>=2){
      this.ProductService.findByName(term).subscribe(
        (response) => this.products = response
      )
    }
  }

}
