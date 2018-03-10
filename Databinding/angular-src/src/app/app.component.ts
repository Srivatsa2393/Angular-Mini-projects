import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'app';

  data = [];

  constructor(private appService: AppService) {
    
  }

/*   ngOnInit() {
    this.data = this.appService.getData()
      .subscribe(response => {
        this.data = response;
        //console.log(this.data);
      })
  } */

  getData() {
    this.appService.getData()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
      })
  }

  ngOnInit() {
    this.getData();
  }

  save() {
    this.appService.postData()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
      })
  }
}
