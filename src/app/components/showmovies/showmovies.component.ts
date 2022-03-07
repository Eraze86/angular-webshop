import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/module/Idata';
import { MoviesService } from 'src/app/servie/movies.service';

import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-showmovies',
  templateUrl: './showmovies.component.html',
  styleUrls: ['./showmovies.component.scss']
})
export class ShowmoviesComponent implements OnInit {

  showMovies: IData[] = []
  order: IData[] = [];

  showMoreInfo: boolean = false
  toCheckout: number = 0;


  constructor(private service: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.movies$.pipe(take(1)).subscribe((dataFromService: IData[]) => {
      this.showMovies = dataFromService,
        console.log(dataFromService)
    })

    this.service.getServerData()

  }

  putInCart(m: IData) {
    this.order.push(m)

    localStorage.setItem('Order', JSON.stringify(this.order))
    this.toCheckout += +1

    localStorage.setItem('totalt', JSON.stringify(this.toCheckout))
    console.log(this.toCheckout)
      }
 
}
