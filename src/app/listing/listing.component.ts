import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  public Customerdata: any;
  id!: any;
  count: number = 0;

  constructor(private service: CustomerService, private route: ActivatedRoute) {
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    let search: string = "";
    this.route.queryParams.subscribe(params => {
      search = params['search'];
    });
    this.SearchCustomer(search);
    this.id = setInterval(() => this.count++, 1000);
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

  SearchCustomer(search:string){
    this.service.LoadCustomer().subscribe((data) => {
      this.Customerdata = data.users;
      this.Customerdata = this.Customerdata.filter((res: {firstName: string; }) => {
        return res.firstName.toLocaleLowerCase().match(search.toLocaleLowerCase());
      });
    });
  }
}
