import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiurl = 'https://dummyjson.com/recipe';


  constructor(private http: HttpClient) {

    
  }
  LoadRecipe(): Observable<any>{
   return this.http.get(this.apiurl);

  }

}
