import { Component } from '@angular/core';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  title=""
  author=""
  description=""
  publisher=""
  language=""
  distributors=""
  releasedyear=""
  price=""
  image=""
  

  readValues = ()=>{
    let books:any = {
      "title":this.title,
      "author":this.author,
      "description":this.description,
      "publisher":this.publisher,
      "language":this.language,
      "distributors":this.distributors,
      "releasedyear":this.releasedyear,
      "price":this.price,
      "image":this.image
    }
    console.log(books)
  }
}