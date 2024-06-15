import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

@Injectable()
export class PostService {

  constructor(private _httpClient: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  public getComments(): Observable<PostComment[]> {
    return this._httpClient.get<PostComment[]>('https://jsonplaceholder.typicode.com/comments')
  }
}
