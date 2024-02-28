import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { Observable ,Observer} from 'rxjs';
import { SearchService } from '../../services/search.service';
import { Total,Image } from '../../interfaces/response-search-images';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export default class SearchResultComponent implements OnInit,OnChanges{

  @Input() data!:Total;
 
  constructor(){
  
  
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


  ngOnInit(): void {
  }


  


}
