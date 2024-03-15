import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginDetails } from '../login-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private firstNumber!: number;
  private secondNumber: number = 100;
  private result!: string;
  public resultArr: string[] = ['Shimni Rai','Pavithra', 'Hope Tutors'];
  private responseData: any;
  

  constructor(private auth:AuthService, private route: Router) {
    localStorage.clear();
   }

  Login = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,]),

  });

  public ProceedLogin(): void {
    if (this.Login.valid) {
      let loginOb: LoginDetails = {
        username: this.Login.value.username!,
        password: this.Login.value.password!
      };

      this.auth.CheckLogin(loginOb).subscribe((data: any) => {
        if (data != null) {
          this.responseData = data;
          localStorage.setItem('token', this.responseData.token);
          localStorage.setItem('Role','Admin');
          this.route.navigate(['CustomerList']);
        }
        
      })
      console.log('Login Success');
    }
    else {
      console.log('Login Fail');
    }
  }
  
}