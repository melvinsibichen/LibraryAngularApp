import { Component } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  title=""

  readValues = ()=>{
    let value:any = {"title":this.title}
    console.log(value)
  }
}