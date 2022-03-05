import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IData } from '../module/Idata';
import { IOrder } from '../module/Iorder';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

private showMovies = new Subject<IData[]>();
movies$ = this.showMovies.asObservable();

  constructor(private http: HttpClient) { }

  getServerData(){
    this.http.get<IData[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/products").subscribe((dataFromApi: IData[]) =>
    this.showMovies.next(dataFromApi))
  }
  

}
