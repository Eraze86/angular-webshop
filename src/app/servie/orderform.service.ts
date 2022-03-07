import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../module/order';

@Injectable({
  providedIn: 'root'
})
export class OrderformService {
  private orderForm = new Subject<Order[]>();
  // orders$ = this.orderForm.asObservable();
// order
  constructor(private http: HttpClient) { }

  // addOrder(newOrder: any){
  //   this.http.post<Order>("https://medieinstitutet-wie-products.azurewebsites.net/api/orders").subscribe(newOrder: Order) => {
  //     console.log(newOrder)
  //   } 
  // }
  getOrderForm(orderApi: any){
    this.http.post<Order[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/orders", orderApi)
    .subscribe((dataFromOrderApi: Order[]) => 
    console.log(dataFromOrderApi))
    // this.orderForm.next(dataFromOrderApi))
}

}
