import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})

export class AlertComponent extends WelcomeComponent {

    message: string;

    constructor(public welcome: WelcomeComponent){
        super();
    }

    close(){
        this.welcome.description = false;
        this.message = this.welcome.message;
    }

}