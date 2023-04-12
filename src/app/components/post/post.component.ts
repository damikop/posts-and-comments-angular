import {Component, OnInit} from '@angular/core';
import {Post} from "../../../models/post";
import {PostService} from "../../../services/post.service";
import {PostComment} from "../../../models/comment";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  // @Input() post: Post;

  showComments: boolean = false;
  posts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(post => {
      this.posts = post;
    });
  }
}
