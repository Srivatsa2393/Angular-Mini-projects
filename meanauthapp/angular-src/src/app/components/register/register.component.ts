import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  username: string;
  email: string;
  password: string;

  constructor(private validateService: ValidateService, 
              private flashMessagesService: FlashMessagesService,
              private authService: AuthService,
              private router: Router
            ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    //console.log(this.name);
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    //required fields
    if(!this.validateService.validateRegister(user)) {
      //console.log('Please fill in all fields');
      this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    //Validate emails
    if(!this.validateService.validateEmail(user.email)) {
      //console.log('Please use a valid email');
      this.flashMessagesService.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    //register user
    this.authService.registerUser(user)
      .subscribe(data => {
        if(data.success) {
          this.flashMessagesService.show('You are now registered please login', { cssClass: 'alert-success', timeout: 3000 });
          this.router.navigate(['/login']);
        } else {
          this.flashMessagesService.show('Please register', { cssClass: 'alert-danger', timeout: 3000 });
          this.router.navigate(['/register']);
        }
      });
  }

}
