import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../module/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private order = new Subject<Order[]>();
  order$ = this.order.asObservable();

  constructor(private http: HttpClient) {}

  getOrderForm(orderApi: any) {
    return this.http.post(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/orders',
      orderApi
    );
  }
  getOrder() {
    this.http
      .get<Order[]>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/orders' +
          '?companyId=39'
      )
      .subscribe((data: Order[]) => {
        this.order.next(data);
        console.log(data);
      });
  }
}
