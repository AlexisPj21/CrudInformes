import { Person } from '../person/person';
export interface Prospect {

  prospectId: number,
  name: string,
  dni: string,
  source: string,
  phone: string,
  address: string,
  mail: string,
  created: Date,
  updated: Date,
  enable: boolean,
  personId:number,
  person:Person[]

}

