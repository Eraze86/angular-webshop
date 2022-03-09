import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/module/Idata';
import { MoviesService } from 'src/app/servie/movies.service';

import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { pickMovies } from 'src/app/module/pickmovies';

@Component({
  selector: 'app-showmovies',
  templateUrl: './showmovies.component.html',
  styleUrls: ['./showmovies.component.scss']
})
export class ShowmoviesComponent implements OnInit {
  
  addOrder: IData[] = []
  addOrderCart: boolean = false
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
  
  putInCart(m: any) {
 
  this.addOrder.push(m.name, m.price);
  console.log(this.addOrder)
  
  let newOrder: IData = new IData (this.addOrder);
    this.service.getAddMovie(newOrder)
    console.log(newOrder)
  
}




  

  
    // this.order.push(m)
    // console.log(m)

    // localStorage.setItem('Order', JSON.stringify(this.order))
    // this.toCheckout += +1

    // localStorage.setItem('totalt', JSON.stringify(this.toCheckout))
    // console.log(this.toCheckout)
     
 
}
