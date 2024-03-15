import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPageService {
  apiurl = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) { 


  }

  LoadRecipe(): Observable<any> {
    return this.http.get(this.apiurl);
  }
}
