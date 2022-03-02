import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
// myOrder: number [] = []
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  myOrder = localStorage.getItem("order")
}
