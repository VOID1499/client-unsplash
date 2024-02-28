import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import TopicsComponent from './pages/topics/topics.component';
import { SearchService } from './services/search.service';
import { CommonModule } from '@angular/common';
import {  debounce, map, take,filter} from "rxjs";
import SearchResultComponent from './pages/search-result/search-result.component';

import { Total ,Image} from './interfaces/response-search-images';
import { SearchParams } from './interfaces/search-params';
import { ModalImageComponent } from './components/modal-image/modal-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,SearchComponent ,TopicsComponent,CommonModule,SearchResultComponent,ModalImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  private _searchService = inject(SearchService);
  public search:boolean = false;
  public searchResult!:Total


  constructor(){

    this._searchService.getSearchParams().subscribe((searchParams:SearchParams)=>{

      if(searchParams.query != ""){
        this.search = true;
        this._searchService.searchImages(searchParams).subscribe((data:Total)=>{
          console.log(data)
          this.searchResult = data;
        })
      }else{
        this.search = false;
      }
    })
    
  }


  ngOnInit(): void {
  
    
  }
  




}
