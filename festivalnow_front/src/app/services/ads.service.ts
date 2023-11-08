import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdsResponse } from '../models/ads.interface';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private getAdsApiUrl = environment.backendAPI + "/ads/ads";
  private postAdsApiUrl = environment.backendAPI + "/ads/create";

  constructor(private http: HttpClient) { }

  getAds(): Observable<AdsResponse> {
    return this.http.get<AdsResponse>(this.getAdsApiUrl);
  }

  postAds(id: string): Observable<any> {
    const data = { "id": id };
    return this.http.post<any>(this.postAdsApiUrl, data);
  }

}
