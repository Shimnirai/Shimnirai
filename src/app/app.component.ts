import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstpro';
  public displaymenu = false;

  constructor(private route: Router) {}

  ngDoCheck(): void{
    if (this.route.url == '/login' || this.route.url == '/'){
      this.displaymenu = false;
    
    } else {
      this.displaymenu = true;
    }
  }
}
