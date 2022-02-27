import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IData } from '../module/Idata';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getServerData(): Observable<IData>{
    return this.http.get<IData>("https://medieinstitutet-wie-products.azurewebsites.net/api/products")
  }
}
