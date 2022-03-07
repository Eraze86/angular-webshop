import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { IData } from 'src/app/module/Idata';
import { MoviesService } from 'src/app/servie/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
movieId: number = 0

  constructor(
    private route: ActivatedRoute,
    private service: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      console.log(p['id'])
      this.movieId = + p['id']
      console.log(this.movieId, "kolla")
    })

  }


  }
