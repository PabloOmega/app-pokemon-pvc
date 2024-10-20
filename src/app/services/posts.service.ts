import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.url}/${post.id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}
