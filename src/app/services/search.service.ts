import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, mergeMap ,takeLast,Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { Total,Image } from '../interfaces/response-search-images';
import { SearchParams } from '../interfaces/search-params';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _http = inject(HttpClient);
  
  
  public searchParams$:BehaviorSubject<SearchParams> = new BehaviorSubject<SearchParams>({
    query:"",
    pageNumber:1,
    perPage:10
  })

  getSearchParams():Observable<SearchParams>{
    return this.searchParams$.asObservable();
  }

  setSearchParams(updateParams:SearchParams){
   
    this.searchParams$.next(updateParams);

  }

  searchImages(searchParams:SearchParams):Observable<Total> {
   
    console.log(searchParams)
    return this._http.get<Total>(`${environment.base_url_api}/search/photos?page=${searchParams.pageNumber}&query=${searchParams.query}`)

  }



  constructor() { }
}
