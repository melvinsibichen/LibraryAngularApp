import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private route:Router){}
  username=""
  password=""

  readValues = ()=>{
    if(this.username=="melvin"&&this.password=="12345"){
      this.route.navigate(["/view"])
    }else{
      alert("Invalid credentials")
    }
    // let values:any = {
    //   "username":this.username,
    //   "password":this.password
    // }
    // console.log(values)
  }
}