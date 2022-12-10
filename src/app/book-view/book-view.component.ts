import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {
  title = ""
  constructor(private api: ApiService,private route:Router) {
    api.fetchBook().subscribe(
      (response) => {
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
  issueBook = (id:any,name:any,price:any,image:any)=>{
    const now = new Date();
    let data:any = {
      "bookId": id,
      "userId": localStorage['userId'],
      "date":now.toLocaleDateString(),
      "userName":localStorage['name'],
      "userEmail":localStorage['email'],
      "bookName":name,
      "bookPrice":price,
      "bookImage":image
    }
    this.api.issueBook(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("Issue book success")
          this.route.navigate(["/userissues"])
        }else{
          alert("Issue book failed")
        }
        
      }
    )
  }
  searchData: any = []
  books: any = []
}
