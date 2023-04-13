import {Component, OnInit} from '@angular/core';
import {Post} from "./models/post";
import {PostService} from "./services/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'My posts';

}

