import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostComment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getComments(postId: number): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(`${this.apiUrl}/comments?postId=${postId}`);
  }
}

