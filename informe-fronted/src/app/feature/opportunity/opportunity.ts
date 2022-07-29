import { Product } from "../product/product";

export interface Opportunity {

  opportunityId: number,
  prospectId: number,
  stageId: number,
  vendorId: number,
  campaignId: number,
  amount: number,
  created: Date,
  updated: Date,
  enable: boolean,
  description: string,
  products: Product[]

}
