import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDetails } from './login-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiurl:string = 'https://dummyjson.com/auth/login';
  
  constructor(private http: HttpClient) { }

    CheckLogin(userCredentials: LoginDetails):Observable<any> {
      let result = this.http.post(this.apiurl, userCredentials);
      console.log(result)
      return result;

    }
    IsLoggedIn() {
      return localStorage.getItem('token') !=null;
    }
    getToken() {
      return 'TestToken';
    }
  }



