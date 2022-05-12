import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Post{
  id:number,
  title:string,
  body:string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList$=this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");

  constructor(private http:HttpClient) {
  }


}
