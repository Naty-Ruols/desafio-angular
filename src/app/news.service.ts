import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  private apiUrl = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post'; 
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get('https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post');
  }

  getNewsById(id: string): Observable<any> {
    return this.http.get(`https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post/${id}`);
  }

  addPost(newPost: { title: string; body: string }): Observable<any> {
    return this.http.post(this.apiUrl, newPost);
  }
}
