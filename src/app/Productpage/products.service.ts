import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiurl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {

    
   }
   LoadProduct(): Observable<any>{
    return this.http.get(this.apiurl);

   }
}
