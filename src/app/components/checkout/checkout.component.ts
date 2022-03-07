import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { take } from 'rxjs';
import { IOrder } from 'src/app/module/Iorder';
import { Order } from 'src/app/module/order';
import { OrderformService } from 'src/app/servie/orderform.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
userForm = new FormGroup({
  
  firstName: new FormControl(""),
  lastName:  new FormControl(""),
  street:  new FormControl(""),
  cityCode:  new FormControl(""),
  city:  new FormControl(""),
  payment:  new FormControl("")
});
  postId: any
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit(): void {
    //   this.service.orders$.pipe(take(1)).subscribe((dataFromServiceOrder: IOrder[]) => {
    //     this.orderForm = dataFromServiceOrder,
    //       console.log(dataFromServiceOrder)
    // })
    // this.service.getOrderForm()
  }
  
      // const newFromData = {id: form.value.id  };

      // return this.service.getOrderForm(newFromData).subscribe((data: Order) =>{
      //   console.log(data)
      // })

      submitUser(user: any) {
        console.log()
      
        // const body = {createdBy: form.value.createdBy, paymentMethod: form.value.paymentMethod };
        // this.http.post<Order>('https://reqres.in/api/posts', body).subscribe((data) => {
        //   console.log(data)
        //   this.postId = data.id;    
        // })
      }

  
}
