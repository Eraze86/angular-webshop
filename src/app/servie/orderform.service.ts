import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../module/order';

@Injectable({
  providedIn: 'root'
})
export class OrderformService {
 
  constructor(private http: HttpClient) { }

  getOrderForm(orderApi: any){
    this.http.post<Order[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/orders", orderApi)
    .subscribe((dataFromOrderApi: Order[]) => 
    console.log(dataFromOrderApi))
    // this.orderForm.next(dataFromOrderApi))
}

}
