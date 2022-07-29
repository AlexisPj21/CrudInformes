import { Person } from "../person/person";
import { ProductRelated } from "./product-related";

export interface Product {

  productId: number,
  name: string,
  description: string,
  brand: string,
  model: string,
  created: Date,
  updated: Date,
  enable: boolean,
  personId: number,
  //persons: Person[],
  products: ProductRelated[]





}
