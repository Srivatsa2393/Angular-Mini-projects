import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private appService: AppService) {}

  callUser() {
    this.appService.getUser()
      .subscribe(
        (user) => {
        console.log(user);
        this.user = user;
      })
  }
}
