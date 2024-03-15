import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent {
  public CartData: any;

  constructor(private service: CartsService){
    this.AllCartData();
  }
  private AllCartData(){
    this.service.AllCart().subscribe((data) =>  {
      this.CartData = data.carts;

    });
    
  
  }

}
