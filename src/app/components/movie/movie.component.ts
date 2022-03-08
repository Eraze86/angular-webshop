import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { IData } from 'src/app/module/Idata';
import { MoviesService } from 'src/app/servie/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
movieId: number = 0
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
      this.movie = dataFromService,
        console.log("heeej" ,dataFromService)
    })
  }
submitToOrderList(){
  
}
  }


  
