import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bottom-layer',
  templateUrl: './bottom-layer.component.html',
  styleUrl: './bottom-layer.component.css'
})
export class BottomLayerComponent {private firstNumber!: number;
  private secondNumber: number = 100;
  private result!: string;
  private resultArr: string[] = ['Pavithra', 'Tutors'];
  private responsedata: any;

  constructor(private auth:AuthService) {}

  Login = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(2)]),
    password: new FormControl('',Validators.required),

  });

  public ProceedLogin():void {
    if(this.Login.valid){
      this.auth.CheckLogin(this.Login.value).subscribe((response: any) => {
        console.log(response);

      });
      console.log('Inside Login function');

    }
    else{
      console.log('Login Fail')
    }

  }


}

