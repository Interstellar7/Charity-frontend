import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CreateAdModel, UpdateAdModel, AdModel} from '../models/ad.model';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAds(search: string): Observable<AdModel[]> {
    return this.http.get<AdModel[]>(`/api/ads?search=${search}`);
  }

  getAdById(id: number): Observable<AdModel> {
      return this.http.get<AdModel>(`/api/ads/${id}`);
    }

  createAd(createAd: CreateAdModel): Observable<AdModel> {
    const data = {
      title: createAd.title,
      description: createAd.description,
      categoryId: createAd.categoryId
    };

    return this.http.post<AdModel>('/api/ads', JSON.stringify(data), this.headers);
  }

  updateAd(id: number, updateAd: UpdateAdModel): Observable<AdModel> {
    const data = {
      title: updateAd.title,
      description: updateAd.description
    };

    return this.http.put<AdModel>(`/api/ads/${id}`, JSON.stringify(data), this.headers);
  }

  deleteAdById(id: number): Observable<void> {
    return this.http.delete<void>(`/api/ads/${id}`);
  }
}
