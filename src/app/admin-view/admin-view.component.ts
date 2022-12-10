import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
  title = ""
  constructor(private api: ApiService, private route:Router) {
    api.fetchBook().subscribe(
      (response) => {
        this.loading = false
        this.books = response
        console.log(response)
      }
    )
  }
  readValues = () => {
    let data: any = {
      "title": this.title
    }
    if (this.title.length == 0) {
      this.searchData = []
    } else {
      this.api.searchBook(data).subscribe(
        (response: any) => {
          if (response.length == 0) {
            this.searchData = []
          } else {
            this.searchData = response
          }
        }
      )
    }
  }
  deleteBtnClick = (id:any)=>{
    let data:any = {"id":id}
    this.api.deleteBook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert("Employee Deleted")
          window.location.reload();
        } else {
          alert("Error in deletion")
        }
      }
    )
  }

  editBtnClick = (id:any)=>{
    this.route.navigate(["/edit"],{state:id})
  }
  searchData: any = []
  books: any = []
  loading: boolean = true
}