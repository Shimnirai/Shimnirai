import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
  Name: string = 'Shimnirai';
  
  
  Subjects = ['Maths','Angular','Eng'];
  
  AllSubjects(sub: string) {
    this.Subjects.push(sub);
  }

  

}
