import { Component } from '@angular/core';
import { RxjsExService } from '../rxjs-ex.service';

@Component({
  selector: 'app-receiver2',
  templateUrl: './receiver2.component.html',
  styleUrl: './receiver2.component.css'
})
export class Receiver2Component {
  receiveMessage: string = "";
  RandomMessage: string = "";
  SubjectMessage: string = "";
  constructor(private service: RxjsExService) {
    service.Sender$.subscribe({
      next: (v:any) => {
        this.receiveMessage = this.receiveMessage + "*******" + " 2nd Received " +  v;
      },
      error: (e:any) => { this.receiveMessage = "*******" + "Error occured:" + e},
      complete: () => { this.receiveMessage = this.receiveMessage + " ******* complete"},
    });

    service.randomOb$.subscribe((res:any) => {
      this.RandomMessage = 'subscription b : ' + res;
    });

    this.service.Sub1$.subscribe(res => {
      this.SubjectMessage = 'Subject b : ' + res;
    });

  }

  

}
