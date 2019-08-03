import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListBookComponent } from '../list-book/list-book.component';
import { BookDataComponent } from '../book-data/book-data.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //pop up
  registration: boolean;
  login: boolean;

  //ngIf
  regButton: boolean;
  logButton: boolean;
  logoutButton: boolean;

  public userName: string;
  
  navbarOpen = false; 

  constructor(private router: Router, private listBook: ListBookComponent, private bookData: BookDataComponent) {
    this.registration = false;
    this.login = false;
  }

  ngOnInit() {
    this.userName = localStorage.getItem('username');
    this.regButton = JSON.parse(localStorage.getItem('regButton'));
    this.logButton = JSON.parse(localStorage.getItem('logButton'));
    this.logoutButton = JSON.parse(localStorage.getItem('logoutButton'));
  }

  openRegistration() {
    this.registration = true;
  }

  toggleNavbar () { 
    this.navbarOpen =! this.navbarOpen; 
  } 

  openLogin() {
    this.login = true;
  }

  openListBook(){
    this.router.navigate(['/list-book']);
  }

  refresh() {
    this.userName = localStorage.getItem('username');
    this.regButton = JSON.parse(localStorage.getItem('regButton'));
    this.logButton = JSON.parse(localStorage.getItem('logButton'));
    this.logoutButton = JSON.parse(localStorage.getItem('logoutButton'));
    this.router.navigate(['/list-book']);
  }

  openAddBook(){
    this.listBook.addBook = true;
    this.bookData.addBook = true;
  }

  loginError() {
    this.router.navigate(['/start']);
  }

  logOut() {
    localStorage.setItem('username', '');
    localStorage.setItem('logButton', JSON.stringify(true));
    localStorage.setItem('regButton', JSON.stringify(true));
    localStorage.setItem('logoutButton', JSON.stringify(false));
    localStorage.setItem('loggedIn', JSON.stringify(false));
    this.router.navigate(['/start']);
  }

}
