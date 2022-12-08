import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.css']
})
export class UserRegisterationComponent {
  name = ""
  aadharNumber = ""
  address = ""
  pin = ""
  dob = ""
  email = ""
  phone = ""
  username = ""
  password = ""
  confirmPassword = ""

  readValues = () => {
    let values:any = {
      "name": this.name,
      "aadharNumber": this.aadharNumber,
      "address": this.address,
      "pin": this.pin,
      "dob": this.dob,
      "email": this.email,
      "phone": this.phone,
      "username": this.username,
      "password": this.password,
      "confirmPassword": this.confirmPassword

    }
    console.log(values)
  }
}