import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  userSignup = (data:any)=>{
    return this.http.post("http://localhost:8080/userRegistration",data)
  }

  userLogin = (data:any)=>{
    return this.http.post("http://localhost:8080/userLogin",data)
  }

  addBook = (data:any)=>{
    console.log(data)
    return this.http.post("http://localhost:8080/addBook",data)
  }

  fetchBook = ()=>{
    return this.http.get("http://localhost:8080/viewBook")
  }

  searchBook = (data:any)=>{
    return this.http.post("http://localhost:8080/searchBook",data)
  }

  deleteBook = (data:any) =>{
    return this.http.post("http://localhost:8080/deleteBook",data)
  }

  updateBook = (data:any)=>{
    return this.http.post("http://localhost:8080/editBook",data)
  }

  getBookById = (data:any)=>{
    return this.http.post("http://localhost:8080/getBookById",data)
  }

  issueBook = (data:any)=>{
    return this.http.post("http://localhost:8080/issueBook",data)
  }

  getUserIssue = (data:any)=>{
    return this.http.post("http://localhost:8080/getUserIssue",data)
  }

  getBookIssue = ()=>{
    return this.http.get("http://localhost:8080/getBookIssue")
  }
}
