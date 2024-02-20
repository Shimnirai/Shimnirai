import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
  Name: string = 'Shimnirai';

  addName(newName: string){
    this.Name=newName;
  }
 

}
