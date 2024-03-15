import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  apiurl = 'https://dummyjson.com/carts';

  constructor(private http: HttpClient) {
    
  }
  AllCart(): Observable<any>{
    return this.http.get(this.apiurl);

  }
}
