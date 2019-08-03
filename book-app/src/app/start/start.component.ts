import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  ratedBooks = new Array();

  constructor() { 
    localStorage.setItem('username', '');
    localStorage.setItem('logButton', JSON.stringify(true));
    localStorage.setItem('regButton', JSON.stringify(true));
    localStorage.setItem('ratedBooks', JSON.stringify(this.ratedBooks));
  }

  ngOnInit() {
  }

}
