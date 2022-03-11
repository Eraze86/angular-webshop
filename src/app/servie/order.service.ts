import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../module/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getOrderForm(orderApi: any){
    this.http.post<Order[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/orders", orderApi)
    .subscribe((dataFromOrderApi: Order[]) => 
    console.log(dataFromOrderApi))
    // this.orderForm.next(dataFromOrderApi))
}

}
