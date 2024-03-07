import { Component } from '@angular/core';

@Component({
  selector: 'app-data-checker',
  templateUrl: './data-checker.component.html',
  styleUrl: './data-checker.component.css'
})
export class DataCheckerComponent {
  currentItem!: any;
  age!: number;
  IsVote!: boolean;

  UpperCase(name: string){
    this.currentItem = name.toUpperCase();
  }
  CheckAgeLimit(age: number){
    if (age > 18) {
      this.IsVote = true;
    } else{
      this.IsVote = false;
    }

  }

}
