import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vsr',
  templateUrl: './vsr.component.html',
  styleUrl: './vsr.component.css'
})
export class VsrComponent {
  @Input () ListOfNames!: string;

  @Output() addList = new EventEmitter<string>();


  add(value: string) {
    this.addList.emit(value);
  }


}
