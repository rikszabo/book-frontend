import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AlertComponent } from './alert/alert.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { BookDataComponent } from './book-data/book-data.component';
import { HelperserviceService } from './helperservice.service';
import { StartComponent } from './start/start.component';

const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'list-book', component: ListBookComponent },
  { path: 'start', component: StartComponent },
  { path: 'book-data', component: BookDataComponent },
  { path: 'add-book', component : AddBookComponent }
];

import * as firebase  from 'firebase';
import { CONFIG } from './envrionment';

firebase.initializeApp(CONFIG);

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    WelcomeComponent,
    AlertComponent,
    AddBookComponent,
    ListBookComponent,
    BookDataComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ScrollingModule
  ],
  providers: [
    HelperserviceService,
    HeaderComponent,
    ListBookComponent,
    BookDataComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
