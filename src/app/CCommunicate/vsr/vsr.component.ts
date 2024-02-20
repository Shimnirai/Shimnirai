import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vsr',
  templateUrl: './vsr.component.html',
  styleUrl: './vsr.component.css'
})
export class VsrComponent {
  @Input () ListOfNames!: string;

}
