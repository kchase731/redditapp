import { Component, OnInit } from '@angular/core';
import { RedditServiceService } from '../../services/reddit-service.service';

@Component({
  selector: 'app-reddit-feed',
  templateUrl: './reddit-feed.component.html',
  styleUrls: ['./reddit-feed.component.css']
})
export class RedditFeedComponent implements OnInit {

  posts = this.redditService.getConfig().subscribe((data) => this.posts = 
  {...data});



  constructor(private redditService: RedditServiceService) { }

  ngOnInit() {
  }


  onSubmit(search: string){

    this.redditService.updateReddit(search);
   
    // console.log(search);
    // event.preventDefault();
  
   
  }

}
