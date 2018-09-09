import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Post } from "./../models/Post";

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: "root"
})
export class PostService {

  getUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.getUrl);
  }
  savePost(post:Post):Observable<Post>{
    return this.http.post<Post>(this.getUrl,post,httpOptions);
  }

}
