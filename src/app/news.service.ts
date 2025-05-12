import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

 private http = inject(HttpClient);
  private apiUrl = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post';
  private newPostSubject = new Subject<{ title: string; body: string }>();
  newPost$ = this.newPostSubject.asObservable();

  getPosts(): Observable<any> {
    return this.http.get('https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post');
  }

  getNewsById(id: string): Observable<any> {
    return this.http.get(`https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post/${id}`);
  }

  addPost(formData: FormData): Observable<any> {
  return this.http.post(this.apiUrl, formData);
}
addNewPost(post: { title: string; body: string }) {
    this.newPostSubject.next(post);
  }

}
