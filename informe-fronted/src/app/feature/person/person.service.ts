import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8080/api/person";


  public findById(id:number):Observable<Person>{
    return this.http.get<Person>(this.url+"/findById/"+id, this.httpOptions);
  }

  public findAll():Observable<Person[]>{
    return this.http.get<Person[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByName(term: string):Observable<Person[]>{
    return this.http.get<Person[]>(this.url+"/findByName/"+term, this.httpOptions);

  }
}
