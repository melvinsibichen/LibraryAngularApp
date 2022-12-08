import { Component } from '@angular/core';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {
  title=""

  readValues = ()=>{
    let value:any = {"title":this.title}
    console.log(value)
  }
}