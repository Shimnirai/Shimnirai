import { Component } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css'
})
export class BasicComponent {
  waterpipe$!: any;

  stream$ = of('water');

  waterPipe$ = this.stream$
  .pipe(filter((w) => w === 'water'))
  .subscribe((w) => console.log('Drink it', w));

  waterPipe1$ = this.stream$.pipe(
    map((w) => warmup(w)))
   .subscribe((x) => console.log("Take Shower", x));

   waterPipe2$ = this.stream$.pipe(
    filter((water => water === "water")),
    map((water) => warmup(water)))
    .subscribe((water) => console.log("Take Shower", water));

  }

function warmup(water: string): any {
  return 'Heat' + water;
}
