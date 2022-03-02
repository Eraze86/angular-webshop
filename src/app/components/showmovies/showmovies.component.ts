import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/module/Idata';
import { MoviesService } from 'src/app/servie/movies.service';
import { Movies } from 'src/app/module/movies';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showmovies',
  templateUrl: './showmovies.component.html',
  styleUrls: ['./showmovies.component.scss']
})
export class ShowmoviesComponent implements OnInit {

  showMovies: IData[] = []
  order: IData[] = [];
  checkOutId: number = 0;
  showMoreInfo: boolean = false
  toCheckout: number = 0;


  constructor(private service: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.movies$.subscribe((dataFromService: IData[]) => {
      this.showMovies = dataFromService,
        console.log(dataFromService)
    })

    this.service.getServerData()

    // this.route.params.subscribe((p) => {
    //   console.log(p['id'], "pID")
    //   this.checkOutId = + p['id']
    //   console.log(this.checkOutId, "tjeckar ut")
    // })
  }

  over(i: number) {
    this.showMoreInfo = true
    console.log(i)

  }
  leave(i: number) {
    this.showMoreInfo = false
    console.log(i)

  }
  putInCart(m: IData) {
    this.order.push(m)

    localStorage.setItem('Order', JSON.stringify(this.order))
    this.toCheckout += +1

    localStorage.setItem('totalt', JSON.stringify(this.toCheckout))
    console.log(this.toCheckout)
      }
 
}
