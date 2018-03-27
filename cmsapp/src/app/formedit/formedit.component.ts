/* import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { TransformService } from '../../services/transform/transform.service';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formedit',
  templateUrl: './formedit.component.html',
  styleUrls: ['./formedit.component.css']
})
export class FormeditComponent implements OnInit {

  data: any = [];

  constructor(public dataService: DataService, public transformService: TransformService, public router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getSystemXml()
      .pipe(
      map((res) => {
        return this.transformService.convertToJson(res)
      })
      ).subscribe((res) => {
        /* this.data.push(res);
        console.log(this.data); */
        /*this.data = res;
        console.log(this.data); 
      })
  }

/*   save() {
    this.dataService.saveSystemXml()
      .pipe(
      map((res) => {
        return this.transformService.convertToJson(res)
      })
      ).subscribe((res) => {
        this.data.push(res);
        console.log(this.data);
      })
  } */

/*   save() {
    this.router.navigate(['/device']);
  } */

  /*onSave(form) {
    console.log(form);
    //this.router.navigate(['/device']);
  }


} */


import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { TransformService } from '../../services/transform/transform.service';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { ValueService } from '../../services/value/value.service';

@Component({
  selector: 'app-formedit',
  templateUrl: './formedit.component.html',
  styleUrls: ['./formedit.component.css']
})
export class FormeditComponent implements OnInit {

  //data: any = [];

  //constructor(public dataService: DataService, public transformService: TransformService, public router: Router) { }

  constructor(public valueService: ValueService) {}

  public data: any = [];

  ngOnInit() {
    this.valueService.getSystemXmlData()
    .subscribe((res) => {
      this.data = res;
      console.log(this.data);
  })
   
  }

/*   getData() {
    this.dataService.getSystemXml()
      .pipe(
      map((res) => {
        return this.transformService.convertToJson(res)
      })
      ).subscribe((res) => {
        /* this.data.push(res);
        console.log(this.data); */
        /*this.data = res;
        console.log(this.data); 
      })
  } */

/*   save() {
    this.dataService.saveSystemXml()
      .pipe(
      map((res) => {
        return this.transformService.convertToJson(res)
      })
      ).subscribe((res) => {
        this.data.push(res);
        console.log(this.data);
      })
  } */

/*   save() {
    this.router.navigate(['/device']);
  } */

  /*onSave(form) {
    // console.log(form);
    // 
    //this.dataService.saveSystemXml(form.value)
    //this.router.navigate(['/device']);
  }*/

}
