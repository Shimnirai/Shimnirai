import { Component } from '@angular/core';
import { ComponentInteractService } from '../component-interact.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  ReceivedMessage!: string;
  
  constructor(private compoInteractservice:ComponentInteractService) {}

  GetMessage() {
    this.ReceivedMessage = this.compoInteractservice.message;
  }

}
