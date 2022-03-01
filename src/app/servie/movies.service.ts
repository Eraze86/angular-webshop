import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IData } from '../module/Idata';
import { Movies } from '../module/movies';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
private showMovies = new Subject<Movies[]>();
movies$ = this.showMovies.asObservable();

  constructor(private http: HttpClient) { }

  getServerData(){
    this.http.get<Movies[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/products").subscribe((dataFromApi: Movies[]) =>
    this.showMovies.next(dataFromApi))
  }
}
