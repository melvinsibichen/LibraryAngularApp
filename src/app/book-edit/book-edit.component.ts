import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
  id=""
  title = ""
  author = ""
  description = ""
  releasedyear = ""
  price = ""
  image = ""

  constructor(private api: ApiService, private route: Router) { 
    this.id= String(route.getCurrentNavigation()?.extras.state);
    console.log(this.id);
    this.api.getBookById({"id":this.id}).subscribe(
      (response:any)=>{
        console.log(response)
        console.log(response[0])
        this.title = response[0].title
        this.author = response[0].author
        this.description = response[0].description
        this.releasedyear = response[0].releasedyear
        this.price = response[0].price
        this.image = response[0].image
      }
    )
  }
  editBtnClick = () => {
    let data: any = {
      "id": Number(this.id), 
      "title": this.title,
      "author": this.author,
      "description": this.description,
      "releasedyear": this.releasedyear,
      "price": this.price,
      "image": this.image
    }
    this.api.updateBook(data).subscribe(
      (response: any) => {
        console.log(response)
        if (response.status == "success") {
          alert("Employee data updated")
          this.route.navigate(["/adminview"]);
        } else {
          alert("Error in deletion")
        }
      }
    )
  }
}