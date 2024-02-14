import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentInteractService } from '../component-interact.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  constructor(private compoInteractservice:ComponentInteractService) {}
  Communi = new FormGroup({
    username : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  SendMessage(){
    let username = this.Communi.value.username;
    if (username) {
      this.compoInteractservice.message = username;
    }
  }

}
