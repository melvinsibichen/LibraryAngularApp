import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private api: ApiService, private route: Router) { }
  username = ""
  password = ""

  readValues = () => {
    let values: any = {
      "username": this.username,
      "password": this.password
    }
    this.api.userLogin(values).subscribe(
      (response: any) => {
        console.log(response)
        this.username = ""
        this.password = ""
        if (response.status == "success") {
          localStorage.setItem('userId',response.userId)
          localStorage.setItem('email',response.email)
          localStorage.setItem('name',response.name)
          this.route.navigate(["/view"])
        } else {
          alert("Invalid Credential")
        }

      }
    )
  }
}