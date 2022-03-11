import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/module/Idata';
import { MoviesService } from 'src/app/servie/movies.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-showmovies',
  templateUrl: './showmovies.component.html',
  styleUrls: ['./showmovies.component.scss'],
})
export class ShowmoviesComponent implements OnInit {
  products: IData[] = [];
  addOrder: IData[] = [];
  total: number = 0;

  constructor(private service: MoviesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.service.products$
      .pipe(take(1))
      .subscribe((dataFromService: IData[]) => {
        (this.products = dataFromService), console.log(dataFromService);
      });

    this.service.getServerData();
    let orderLs: string = localStorage.getItem('order') || '[]';
    this.addOrder = JSON.parse(orderLs);
  }

  putInCart(add: IData) {
    this.addOrder.push(add);
    localStorage.setItem('order', JSON.stringify(this.addOrder));
    console.log(this.addOrder);
  }
}
