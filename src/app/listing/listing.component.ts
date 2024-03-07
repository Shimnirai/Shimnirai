import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  public Customerdata: any;

  constructor(private service: CustomerService) {
    this.LoadCustomerData();
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.LoadCustomerData();
  }

  private LoadCustomerData(){
    this.service.LoadCustomer().subscribe((data) => {
      this.Customerdata = data.users;
    });
  }

  public delete(id: number) {
    if(confirm('Are you sure to delete')){
      this.service.RemoveCustomer(id).subscribe((result) =>{
        if(result != null) {
          this.LoadCustomerData();
        }
      });
    }
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

}
