import { Component } from '@angular/core';
import { ComponentInteractService } from '../comp-communicate/component-interact.service';

@Component({
  selector: 'app-pipe-ex',
  templateUrl: './pipe-ex.component.html',
  styleUrl: './pipe-ex.component.css'
})
export class PipeExComponent {
  name: string = 'Hope Tutors';
  accountBalance: number = 10000000;
  dateObj = Date.now();
  pi: number = 3.124345653;
  pi1: number =3;
  HopeTutorsAge: number = 8;
  TrainerAge: number = 29;
  ReceivedData: string = '';

  constructor(private CompoInteractService: ComponentInteractService) {
    this.ReceivedData = this.CompoInteractService.message;
  }


}
