import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IData } from 'src/app/module/Idata';
import { Order } from 'src/app/module/order';
import { OrderRow } from 'src/app/module/orderrow';
import { pickMovies } from 'src/app/module/pickmovies';
import { MoviesService } from 'src/app/servie/movies.service';
import { OrderService } from 'src/app/servie/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  addOrder: IData[] = [];
  total: number = 0;
  // order:Observable <OrderRow[]> = new Observable
  // order: orderRow = new Order


  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    street: new FormControl(''),
    cityCode: new FormControl(''),
    city: new FormControl(''),
    payment: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private service: MoviesService,
    private serviceorder: OrderService,
  ) {}
  ngOnInit(): void {
    let orderLs: string = localStorage.getItem('order') || '[]';
    this.addOrder = JSON.parse(orderLs);
    console.log(this.addOrder);

    for(let i=0;i<this.addOrder.length;i++){   
      this.total+= this.addOrder[i].price
      console.log(this.total)  }

      // this.service.order$.subscribe((data => {
      //   this.order = data;
      // }));
      // this.service.getOrder();
    // this.service.addMovie$.subscribe((data: IData[]) =>{
    //   this.addOrder = data
    // })

  }

  remove(i: number) {
    this.addOrder.splice(i, 1);
    this.saveLs();
  }
  saveLs() {
    localStorage.setItem('order', JSON.stringify(this.addOrder));
  }

  submitUser() {
    // this.orderRows.push(
    //   productId: "",
    //   product: null,
    //   amount: this.total,)
 
      const body: Order = {
        createdBy: this.userForm.get("firstName")?.value,
        paymentMethod: this.userForm.get("payment")?.value,
        id: 0,
        created: new Date(),
        companyId: 39,
        totalPrice: this.total,
        status: 0,
        orderRows: [],
      };
      this.http
        .post<Order[]>(
          'https://medieinstitutet-wie-products.azurewebsites.net/api/orders',
          JSON.stringify(body), { 
            headers: {
              "content-type": "application/json"
            }
          });
    }

  }
