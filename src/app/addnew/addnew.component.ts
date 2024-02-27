import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerInfo } from '../customer-info';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrl: './addnew.component.css'
})
export class AddnewComponent {
  messageclass:string = '';
  message: string = '';
  responsedata: any;
  customerId!: number;
  editdata: any;

  constructor(private custService: CustomerService) {}

  register = new FormGroup({
    id: new FormControl({ value: '', disabled: true}),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required,Validators.email])),
    phone: new FormControl('',Validators.required),
  });

  SaveCustomer() {
    if (this.register.valid){
      let customer: CustomerInfo = {
        name: '',
        email: this.register.value.name || '',
        phone: parseInt(this.register.value.phone ?? '', 0) || 0,
      };
      this.custService.SaveCustomer(customer).subscribe((result) => {
        console.log(result);
      })
    }
  }

  get name() {
    return this.register.get('name');
  }
  get email(){
    return this.register.get('email');
  }
  get code() {
    return this.register.get('id');
  }

}
