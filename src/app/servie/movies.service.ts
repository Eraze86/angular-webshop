import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IData } from '../module/Idata';
import { OrderRow } from '../module/orderrow';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private IProducts = new Subject<IData[]>();
  products$ = this.IProducts.asObservable();
  private movie = new Subject<IData>();
  movie$ = this.movie.asObservable();

  private order = new Subject<OrderRow[]>();
  order$ = this.order.asObservable();


  constructor(private http: HttpClient) {}

  getServerData() {
    this.http
      .get<IData[]>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
      )
      .subscribe((dataFromApi: IData[]) => this.IProducts.next(dataFromApi));
  }
  getMovieById(id: number) {
    this.http
      .get<IData>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/products/' +
          id
      )
      .subscribe((res: IData) => this.movie.next(res));
  }

  getOrder() {
    this.http
      .get<OrderRow[]>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/products/' +
          '?companyId39'
      )
      .subscribe((data: OrderRow[]) => {
        console.log(this.order.next(data));
      });
  }
}
