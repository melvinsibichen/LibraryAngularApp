import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  constructor(private api:ApiService,private route:Router){}
  title=""
  author=""
  description=""
  releasedyear=""
  price=""
  image=""

  readValues = ()=>{
    let books:any = {
      "title":this.title,
      "author":this.author,
      "description":this.description,
      "releasedyear":this.releasedyear,
      "price":this.price,
      "image":this.image
    }
    this.api.addBook(books).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("Book added Successfully")
          this.route.navigate(["/adminview"])
        }else{
          alert("Error in adding book")
        }
      }
    )
    console.log(books)
  }
}