import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Prospect } from './prospect';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProspectService {

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url ="http://localhost:8080/api/prospect"

  constructor(
    private http: HttpClient
  ) { }

  public save(prospect: Prospect):Observable<Prospect>{
    return this.http.post<Prospect>(this.url+"/save",prospect, this.httpOptions);

  }

  public findById(id:number):Observable<Prospect>{
    return this.http.get<Prospect>(this.url+"/"+id, this.httpOptions);
  }

  public findAll():Observable<Prospect[]>{
    return this.http.get<Prospect[]>(this.url+"/findAll",  this.httpOptions);
  }

  public findByName(term:string):Observable<Prospect[]>{
    return this.http.get<Prospect[]>(this.url+"/findByName/"+term, this.httpOptions);
  }
}
