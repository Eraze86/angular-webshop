import { Component, OnInit } from '@angular/core';
import { OrderRow } from 'src/app/module/orderrow';
import { MoviesService } from 'src/app/servie/movies.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

order: OrderRow [] = []

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
 

}
}
