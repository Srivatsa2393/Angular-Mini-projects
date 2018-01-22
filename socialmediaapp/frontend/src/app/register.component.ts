import { Component } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })

export class RegisterComponent {
    registerData = {}

    post() {
        console.log(this.registerData);
    }
}