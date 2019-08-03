import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { convertArray } from '../../app/envrionment';
import { BookDataComponent } from '../book-data/book-data.component';


@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  logIn: boolean;
  bookData: boolean;
  empty: boolean;
  addBook: boolean;
  items: any;

  constructor(public router: Router, public bookDataComponent: BookDataComponent) {
    this.bookData = false;
    this.empty = false;
    this.addBook = false;

    this.logIn = JSON.parse(localStorage.getItem('loggedIn'));
    console.log('loggedIn: ', this.logIn);

    if (!this.logIn) {
      this.router.navigate(['/start']);
    }

    this.dataListing();
  }

  ngOnInit() { }

  dataListing() {
    let collName = "/";
    let ref = firebase.database().ref(collName);

    ref
      .once('value')
      .then(res => {
        this.items = convertArray(res);
        if (this.items.length == 0) {
          this.empty = true;
        } else {
          this.empty = false;
        }
      }).catch(error => {
        console.log('websocket');
        this.empty = true;
      });
  }

  openDataPage(index: number) {
    localStorage.setItem('bookData', JSON.stringify(this.items[index]));
    this.router.navigate(['/book-data']);
  }

}
