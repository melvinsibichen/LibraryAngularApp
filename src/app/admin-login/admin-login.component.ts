import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username=""
  password=""

  constructor(private route:Router){}

  readValues = ()=>{
    let values:any = {
      "username":this.username,
      "password":this.password
    }
    console.log(values)

    if (this.username=="jobin" && this.password=="12345") {
      this.route.navigate(["/view"])
    } else {
      alert("Invalid Login Credentials")
    }
  }
}