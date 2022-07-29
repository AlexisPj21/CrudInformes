import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8080/api/product"

  constructor(
    private http: HttpClient
  ) { }

  //create
  public save(product:Product): Observable<Product>{
    return this.http.post<Product>(this.url+"/save",product, this.httpOptions);
  }

  //read
  public findById(id: number): Observable<Product>{
    return this.http.get<Product>(this.url+"/findById/"+id, this.httpOptions);
  }

  public findByName(term: string): Observable<Product[]>{
    return this.http.get<Product[]>(this.url+"/findByName/"+term, this.httpOptions);
  }
}
