import { Component, OnInit } from '@angular/core';
import { LoginService, User } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User("","");
  public errorMsg = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    if(!this.loginService.login(this.user)){
      this.errorMsg = 'Failed to login, please try again';
    }
  }
}
