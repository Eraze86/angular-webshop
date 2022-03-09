import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IData } from 'src/app/module/Idata';
import { Order } from 'src/app/module/order';
import { pickMovies } from 'src/app/module/pickmovies';
import { MoviesService } from 'src/app/servie/movies.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
orderMovies: IData [] = [];
// order: Array<pickMovies>[] = []
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    street: new FormControl(''),
    cityCode: new FormControl(''),
    city: new FormControl(''),
    payment: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private http: HttpClient, private service: MoviesService) {}
  ngOnInit(): void {
    this.orderMovies = this.service.getAddMovie()

    // this.service.addMovie$.subscribe((dataFromService: IData[] ) =>
    // this.orderMovies = dataFromService)
    // this.order= JSON.parse(localStorage.getItem("order") || '{}')
    // this.order.push(this.orderMovies)
    // this.arrayOfKeys = Object.keys(this.order);
 
  }




  submitUser() {
 
    const body: Order = {
      createdBy: this.userForm.get("firstName")?.value,
      paymentMethod: this.userForm.get("payment")?.value,
      id: 0,
      created: new Date(),
      companyId: 39,
      totalPrice: 0,
      status: 0,
      orderRows: [],
    };
    this.http
      .post<Order>(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/orders',
        JSON.stringify(body), { 
          headers: {
            "content-type": "application/json"
          }
        });
  }
  // this.service.getAddMovie();
}
