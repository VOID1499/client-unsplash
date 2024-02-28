import { CommonModule, NgOptimizedImage } from '@angular/common';
import {  Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Observable, Subject, debounceTime, distinctUntilChanged, switchMap ,map} from 'rxjs';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,NgOptimizedImage],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
 
  
  public searchInput$:Subject<string> = new Subject<string>;
  private _searchService = inject(SearchService);


  constructor(){
    
    this.searchInput$
    .pipe(
      debounceTime(400),
      distinctUntilChanged(),
    )
    .subscribe((searchInput$) => {
      this._searchService.setSearchParams({query:searchInput$,pageNumber:1})
    });

    

  }

  onInput(event:Event){
    //emite el nuevo valor  al observable del input
    const element = event.currentTarget as HTMLInputElement;
    this.searchInput$.next(element.value);
  }


  







}
