import {Component, Input, OnInit} from '@angular/core';
import {PostComment} from "../../models/comment";
import {CommentService} from "../../services/comment.service";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  @Input() postId!: number;
  comments: PostComment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getComments(this.postId).subscribe(comments => {
        this.comments = comments;
    })
  }
}
