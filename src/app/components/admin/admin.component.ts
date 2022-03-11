import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/module/order';
import { OrderRow } from 'src/app/module/orderrow';
import { MoviesService } from 'src/app/servie/movies.service';
import { OrderService } from 'src/app/servie/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  orders: Order[] = [];


  constructor(private service: OrderService) { }

  ngOnInit(): void {
    this.service.order$
      .subscribe((dataFromService: Order[]) => {
        (this.orders = dataFromService), console.log(dataFromService);
        // console.log(this.orders)
      });
    this.service.getOrder();
 

}
}
