import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommunicateComponent } from './communicate/communicate.component';




@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    CommunicateComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class CompCommunicateModule { }
