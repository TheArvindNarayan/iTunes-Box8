import { GetDataService } from './get-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: any;
  copyright: any;
  title: any;
  titleURI: any;
  constructor(private getdata: GetDataService) {
  }

  ngOnInit() {
    this.getdata.getPosts().subscribe(
      data => {
        this.posts = data.feed.entry;
        this.copyright = data.feed.rights.label;
        this.title = data.feed.author.name.label;
        this.titleURI = data.feed.author.uri.label;
        console.log(data);
      }
    );
  }

}
