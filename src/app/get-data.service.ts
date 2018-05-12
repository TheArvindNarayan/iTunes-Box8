import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  url = 'https://itunes.apple.com/in/rss/topalbums/limit=100/json';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }
}
