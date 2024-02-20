import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiurl:string = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) { }

    CheckLogin(Credential: any) {
      let result = this.http.post(this.apiurl, Credential);
      return result;

    }
    IsLoggedIn() {
      return localStorage.getItem('token') !=null;
    }
    getToken() {
      return 'TestToken';
    }
  }



