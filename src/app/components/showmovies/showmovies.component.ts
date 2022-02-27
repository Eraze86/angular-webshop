import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/module/Idata';
import { MoviesService } from 'src/app/servie/movies.service';

@Component({
  selector: 'app-showmovies',
  templateUrl: './showmovies.component.html',
  styleUrls: ['./showmovies.component.scss']
})
export class ShowmoviesComponent implements OnInit {

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.service.getServerData().subscribe((data: IData) => {
      console.log(data)
    })
  }

}
