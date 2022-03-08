import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IData } from 'src/app/module/Idata';
import { MoviesService } from 'src/app/servie/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  addOrder: boolean = false
movieId: number = 0
toCheckout: number = 0;
order: IData[] = [];
movie: IData = {
  id: "",
  name: "",
  description: "",
  price: "",
  imageUrl: "",
  year: "",
  added: "",
  productCategory: "",
}


  constructor(
    private route: ActivatedRoute,
    private service: MoviesService) { }

  ngOnInit(): void {

    this.route.params.subscribe((p) => {
      console.log(p['id'])
      this.movieId = + p['id']
      console.log(this.movieId, "kolla")
      this.service.getMovieById(this.movieId)
    })

    this.service.movie$.subscribe((dataFromService: IData) => {
      this.movie = dataFromService
    })
  }
putInCartMovie(movie: IData) {
  this.addOrder = true
  setTimeout(() => {
    this.addOrder = false
    
  }, 1500);
  
  this.order.push(movie)

  localStorage.setItem('OrderMovie', JSON.stringify(this.order))
  this.toCheckout += +1

  localStorage.setItem('totalt', JSON.stringify(this.toCheckout))
  console.log(this.toCheckout)
  
}
  }


  
