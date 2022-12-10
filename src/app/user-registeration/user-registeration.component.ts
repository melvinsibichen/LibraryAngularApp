import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.css']
})
export class UserRegisterationComponent {
  constructor(private api:ApiService, private route:Router){}
  name = ""
  address = ""
  email = ""
  phone = ""
  username = ""
  password = ""
  confirmPassword = ""

  readValues = () => {
    let values:any = {
      "name": this.name,
      "address": this.address,
      "email": this.email,
      "phone": this.phone,
      "username": this.username,
      "password": this.password,
    }
    
    if(this.password == this.confirmPassword){
      this.api.userSignup(values).subscribe(
        (response:any)=>{
          this.route.navigate(["/userlogin"])
        }
      )
    }else{
      alert("password mismatch")
    }
  }
}