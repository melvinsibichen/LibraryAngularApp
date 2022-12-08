import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {
  name=""
  title=""
  date=""
  membership=""

  readValues = ()=>{
    let value:any = {"name":this.name,"title":this.title,"date":this.date,"membership":this.membership}
    console.log(value)
  }
}