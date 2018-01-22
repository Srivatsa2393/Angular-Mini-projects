import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })

export class RegisterComponent {
    registerData = {}

    constructor(private apiService: ApiService) {}

    post() {
        //console.log(this.registerData);
        this.apiService.sendUserRegistration(this.registerData)
    }
}