import { Component } from '@angular/core';

@Component({
  selector: 'app-prime-test',
  templateUrl: './prime-test.component.html',
  styleUrl: './prime-test.component.css'
})
export class PrimeTestComponent {
  result: any;
  InitialValue!: number;

  LoadHeavyComp() {
    this.InitialValue = 777;
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('app.worker', import.meta.url));
      worker.postMessage(20000);
      worker.onmessage = ({ data }) => {
        this.result = data.prime;
      };
    } else {

    }
  }

}
