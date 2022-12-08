import { Component } from '@angular/core';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
  title=""

  readValues = ()=>{
    let value:any = {"title":this.title}
    console.log(value)
  }
}