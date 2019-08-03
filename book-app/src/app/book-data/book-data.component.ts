import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.scss']
})
export class BookDataComponent implements OnInit {
  book: any;
  currentRate: any;
  rateNumber: any;
  myRate: number = 0;
  rate: any;
  fullRate: number;

  addBook: boolean;
  ratePermission : boolean;
  ratedBooks = new Array();

  constructor() {

    try{
    this.ratePermission = true;
    this.book = JSON.parse(localStorage.getItem('bookData'));
    this.rateNumber = +this.book.rateNumber; 
    this.rate = +this.book.rate;
    this.currentRate = Math.floor(this.rate / this.rateNumber);
    this.fullRate = Math.floor(this.rate / this.rateNumber);
    this.ratedBooks = JSON.parse(localStorage.getItem('ratedBooks'));
    console.log(this.book.key);
    }catch{
      console.log('init');
    }
  }

  ngOnInit() {
    for(var i = 0; i<this.ratedBooks.length; i++){
      if(this.ratedBooks[i] == this.book.key){
        this.ratePermission = false;
      }
    }
    console.log(this.ratedBooks);
  }

  addRate(){
    this.rateNumber++;
    this.rate = this.rate + this.currentRate;
    this.fullRate = Math.floor(this.rate / this.rateNumber);

    let reference = '/' + this.book.key;
    this.book.rate = this.rate;
    this.book.rateNumber = this.rateNumber;
    firebase.database().ref(reference).update({ rateNumber: this.rateNumber });
    firebase.database().ref(reference).update({ rate: this.rate });

    this.ratedBooks.push(this.book.key);
    localStorage.setItem('ratedBooks', JSON.stringify(this.ratedBooks));
    this.ratePermission = false;
  }
}
