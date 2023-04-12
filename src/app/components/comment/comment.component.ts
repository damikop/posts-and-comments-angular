import {Component, Input, OnInit} from '@angular/core';
import {PostComment} from "../../../models/comment";
import {PostComponent} from "../post/post.component";
import {CommentService} from "../../../services/comment.service";
import {Post} from "../../../models/post";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent{
  // @Input post: Post;

  // comments: PostComment[] = [];

  // constructor(private commentService: CommentService){};

//   ngOnInit(): void {
//     this.commentService.getComments(this.post.id).subscribe(comment => {
//       this.comments = comment;
//   }
//
// }
}
