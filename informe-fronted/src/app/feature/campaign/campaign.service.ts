import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Campaign } from './campaign';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CampaignService {


  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url = "http://localhost:8080/api/campaign";

  constructor(
    private http: HttpClient
  ) { }

  //create
  public save(campaign: Campaign): Observable<Campaign>{
    return this.http.post<Campaign>(this.url+"/save", campaign, this.httpOptions);

  }
  ///read
  public findById(campaignId:number): Observable<Campaign>{
    return this.http.get<Campaign>(this.url+"/"+campaignId, this.httpOptions);
  }
}
