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

showMovies: IData [] = []
order: IData [] = [];
checkOutId: number = 0;
showMoreInfo:boolean = false
toCheckout: number = 0;


  constructor(private service: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.movies$.subscribe((dataFromService: IData[]) => {
      this.showMovies = dataFromService,
      console.log(dataFromService)
    })
      this.service.getServerData()

      this.route.params.subscribe((p) => {
        console.log(p['id'])
         this.checkOutId =+ p['id']
         console.log(this.checkOutId)
      })
  }

 over(){
  this.showMoreInfo = true
 
  }
  leave(){
    this.showMoreInfo = false
  
  }
  putInCart(p: IData){
    this.order.push(p)
    console.log(p)
    localStorage.setItem('Order', JSON.stringify(this.order))
    this.toCheckout += +1
    // this.myList = 
//när man trycker på knappen så ska den skicka information till kundvagnen där orden ska läggas. så det ska bli en lista
//måste välja rätt id för att hämta rätt film. priset ska läggas ihop. 
  }
}
