import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RedditServiceService {

  constructor(private http: HttpClient) { }

  subReddit = 'aww';
  configUrl = `https://www.reddit.com/r/${this.subReddit}.json`;

getConfig() {
  
  return this.http.get(this.configUrl);

}

updateReddit(search){

  this.subReddit = search;
  this.configUrl = `https://www.reddit.com/r/${this.subReddit}.json`;
  console.log(search)
  return this.http.get(this.configUrl);
  
}
}



