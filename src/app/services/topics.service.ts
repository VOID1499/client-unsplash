import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Topic } from '../interfaces/response-topics';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {

  private readonly base_url = environment.base_url_api;
  private _http = inject(HttpClient);

  constructor() {}

  public getTopics(): Observable<Topic[]> {
    return this._http.get<Topic[]>(`${this.base_url}/topics`);
  }
}
