import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/module/Idata';
import { MoviesService } from 'src/app/servie/movies.service';
import { Movies } from 'src/app/module/movies';
@Component({
  selector: 'app-showmovies',
  templateUrl: './showmovies.component.html',
  styleUrls: ['./showmovies.component.scss']
})
export class ShowmoviesComponent implements OnInit {

 showMovies: IData [] = []
  constructor(private service: MoviesService) { }

  ngOnInit(): any {
    this.service.movies$.subscribe((dataFromService: IData[]) => {
      this.showMovies = dataFromService,
      console.log(dataFromService)
    })
      this.service.getServerData()
   

      //vi vill visa informationen här. Och när man sen trycker på något ska et skickas tillbaka
    
  }

}
