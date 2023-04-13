import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";
import {PostComment} from "../../models/comment";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // @Input() posts: Post[];
  posts: Post[];
  comments: PostComment[];
  showComments: boolean = false;

  // post: Post[] =[];
  constructor(private commentService: CommentService,
              private postService: PostService
  ) {
  }

  ngOnInit(): void {
      // this.commentService.getComments(this.post.id).subscribe(comments => {
      //     this.comments = comments;
      // })
    // this.postService.getPosts().subscribe(posts => {
    //   this.posts = posts;
    //   console.log(this.posts);})
    //   this.commentService.getComments(this.posts.id).subscribe(comments => {
    //     this.comments = comments;
    //   })
    //  });
  }


  // ToggleComments() {
  //   this.showComments = !this.showComments;
    // if (this.showComments) {
    //   this.commentService.getComments(this.posts.id).subscribe(comments => this.comments = comments);
    // }
//   }
}
//   ToggleComments(postId: number, index: number): void{
//     if (!this.showComments[index]) {
//       this.commentService.getComments(postId).subscribe(comments => {
//         this.comments[index] = comments;
//         this.showComments[index] = true;
//       });
//     } else {
//       this.showComments[index] = false;
//     }
// }
