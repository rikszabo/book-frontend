import { Component, OnInit } from '@angular/core';
import { ListBookComponent } from '../list-book/list-book.component';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { BookDataComponent } from '../book-data/book-data.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AddBookComponent implements OnInit {

  uniqueId: any;
  alert: boolean;

  name: string;
  writer: string;
  language: string;
  genre: string;
  description: string;

  constructor(private listBook: ListBookComponent, private bookData: BookDataComponent, private router: Router, private location: Location) {
    this.name = "";
    this.writer = "";
    this.language = "";
    this.genre = "Válassz...";
    this.description = "";
   }

  ngOnInit() {
  }

  close() {
    this.listBook.addBook = false;
    this.bookData.addBook = false;
  }

  idGenerator() {
    var number = Math.random();
    var id = number.toString(36).substr(2, 9);
    console.log("id: " + id);
    return id;
  }

  addNewBook() {
    if (this.name === "" || this.writer === "" || this.language === "" || this.genre === "Válassz..." || this.description === "") {
      this.alert = true;
      console.log("empty field")
    } else {
      this.uniqueId = this.idGenerator();

      var jsonFile = {
        id: this.uniqueId, name: this.name, writer: this.writer, language: this.language,
        genre: this.genre, description: this.description, rate: 0, rateNumber: 0
      };
  
      let ref = firebase.database().ref('/');
      let newItem = ref.push();
      newItem.set(jsonFile);
      this.alert = false;
      this.close();
      if (this.location.path() !== '/book-data') {
        location.reload();
      } 
    }
  }

}

