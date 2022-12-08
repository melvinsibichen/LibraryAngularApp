import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

const myRoute:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"userregistration",
    component:UserRegisterationComponent
  },
  {
    path:"add",
    component:BookAddComponent
  },
  {
    path:"view",
    component:BookViewComponent
  },
  {
    path:"edit",
    component:BookEditComponent
  },
  {
    path:"delete",
    component:BookDeleteComponent
  },
  {
    path:"issue",
    component:IssueBookComponent
  },
  {
    path:"search",
    component:BookSearchComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegisterationComponent,
    UserLoginComponent,
    BookViewComponent,
    BookAddComponent,
    BookEditComponent,
    BookDeleteComponent,
    IssueBookComponent,
    BookSearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }