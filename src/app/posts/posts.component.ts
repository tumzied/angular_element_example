import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$=this.postService.postList$.pipe(catchError(err=>{
    console.log(err);
    return of(null)
  }));
  
  constructor(private postService:PostService) {
    
  }
  
  ngOnInit(): void {
  }

}
