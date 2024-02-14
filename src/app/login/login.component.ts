import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private firstNumber!: number;
  private secondNumber: number = 100;
  private result!: string;
  private resultArr: string[] = ['Shimni Rai','Pavithra', 'Hope Tutors'];
  private responsedata: any;

  constructor(){ }

  Login = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(2)]),
    paasword: new FormControl('',[Validators.required,]),

  });

  public ProceedLogin(): void {
    if (this.Login.valid) {
      console.log('Login Success');
    }
    else {
      console.log('Login Fail');
    }
  }
  
}