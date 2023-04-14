import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts: Post[]=[];
  // showComments: boolean = false;
  postIdToShowComments: number | null = null;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts =>
    this.posts = posts);
  }

  toggleComments(postId: number): void {
    if (this.postIdToShowComments === postId) {
      this.postIdToShowComments = null;
    } else {
      this.postIdToShowComments = postId;
    }  }
}
