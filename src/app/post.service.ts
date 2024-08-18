import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api/posts'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Method to fetch all posts
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Method to add a new post
  addPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }
}
