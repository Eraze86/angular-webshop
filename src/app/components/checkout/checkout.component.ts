import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  order: Order[] = [];
  totalmovies: number = 0;
  orderRow: OrderRow[] = [];
  amount: number = 0;

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
    private serviceorder: OrderService
  ) {}
  ngOnInit(): void {
    let orderLs: string = localStorage.getItem('order') || '[]';
    this.addOrder = JSON.parse(orderLs);
    console.log(this.addOrder);

    for (let i = 0; i < this.addOrder.length; i++) {
      this.total += this.addOrder[i].price;
      console.log(this.total);
    }
  }

  remove(i: number) {
    this.addOrder.splice(i, 1);
    this.saveLs();
  }
  saveLs() {
    localStorage.setItem('order', JSON.stringify(this.addOrder));
  }

  submitUser() {
    for (let i = 0; i < this.addOrder.length; i++) {
      if (
        !this.orderRow.some((movie) => movie.productId === this.addOrder[i].id)
      ) {
        this.orderRow.push({
          id: 0,
          orderId: 0,
          product: null,
          productId: this.addOrder[i].id,
          amount: this.amount + 1,
        });
      }
    }

    const theOrder = {
      createdBy: this.userForm.get('firstName')?.value,
      paymentMethod: this.userForm.get('payment')?.value,
      id: 0,
      created: new Date(),
      companyId: 39,
      totalPrice: this.total,
      status: 0,
      orderRows: this.orderRow,
    };
    console.log(theOrder);
    this.serviceorder.getOrderForm(theOrder).subscribe((data) => {
      console.log(data);
    });
  }
}
