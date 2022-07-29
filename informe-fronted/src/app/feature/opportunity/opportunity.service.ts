import { Injectable } from '@angular/core';
import { Opportunity } from './opportunity';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  private httpOptions = {
    headers : new HttpHeaders({"Content-Type":"application/json"})
  }

  private url = "http://localhost:8080/api/opportunity"

  constructor(
    private http: HttpClient
  ) { }

  public save(opportunity: Opportunity): Observable <Opportunity> {
    return this.http.post<Opportunity>(this.url+"/save",opportunity,this.httpOptions);
  }

  public findById(id: number): Observable <Opportunity> {
    return this.http.get<Opportunity>(this.url+"/"+id,this.httpOptions);
  }

  public deleteById(id: number): Observable<void>{
    console.log(id);
    return this.http.delete<void>(this.url+"/delete/"+id, this.httpOptions);
  }

  public findAll(): Observable<Opportunity[]>{
    return this.http.get<Opportunity[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByDescription(term: string): Observable<Opportunity[]>{
    return this.http.get<Opportunity[]>(this.url+"/findByDescription/"+term, this.httpOptions);
  }

}
