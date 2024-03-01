import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  public Productdata: any;

  constructor(private service: ProductsService) {
    this.LoadProductData();
  }
   private LoadProductData (){
    this.service.LoadProduct().subscribe((data) => {
      this.Productdata = data.products;

   });
  
  } 

}

