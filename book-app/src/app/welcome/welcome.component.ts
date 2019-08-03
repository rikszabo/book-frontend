import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  description: boolean;
  message: string;

  constructor() { 
    this.description = false;
    this.message = "A feladat Angular 8 keretrendszerrel készült."
                 + " Használt technológiák: Firebase, Node.JS, MongoDB, JWT, Docker, Bootstrap, Sass.";
  }

  ngOnInit() {
  }

  changeDescription(){
    this.description = true;
  }

  close(){
    this.description = false;
  }
}
