import { GetDataService } from './get-data.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('bgImgTrigger', [
        state('none, void', style({
            transform: 'translateY(15%)'
        })),
        state('maximum', style({
          transform: 'translateY(0%)'
        })),
        transition('none => maximum', animate('350ms'))
    ])
]
})
export class AppComponent implements OnInit, AfterViewInit {
  posts: any;
  copyright: any;
  title: any;
  titleURI: any;
  state = 'none';
  constructor(private getdata: GetDataService) {
  }

  ngOnInit() {
    this.getdata.getPosts().subscribe(
      data => {
        this.posts = data['feed'].entry;
        this.copyright = data['feed'].rights.label;
        this.title = data['feed'].author.name.label;
        this.titleURI = data['feed'].author.uri.label;
        console.log(this.posts);
      }
    );
  }

  ngAfterViewInit() {
    this.state = 'maximum';
}

}
