import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/module/order';
import { OrderService } from 'src/app/servie/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  orders: Order[] = [];

  constructor(private service: OrderService) {}

  ngOnInit(): void {
    this.service.order$.subscribe((dataFromService: Order[]) => {
      (this.orders = dataFromService), console.log(dataFromService);
    });
    this.service.getOrder();
  }
}
