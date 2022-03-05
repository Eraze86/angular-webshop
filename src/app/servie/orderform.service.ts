import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../module/order';

@Injectable({
  providedIn: 'root'
})
export class OrderformService {
  // private orderForm = new Subject<IOrder[]>();
  // orders$ = this.orderForm.asObservable();
// order
  constructor(private http: HttpClient) { }

  getOrderForm(orderApi: any){
    // this.http.post<Order>("https://medieinstitutet-wie-products.azurewebsites.net/api/orders", orderApi)
    //.subscribe((dataFromOrderApi: IOrder[]) =>
    // this.orderForm.next(dataFromOrderApi))
}
}
