import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginUser: LoginService) { }

  ngOnInit() {
  }

  login(e) {
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    console.log(username, password);

    if(username == 'user3' && password == 'user3'){
      this.loginUser.setUserLoggedIn();
      this.router.navigate(['device']);
    }
  }

}
