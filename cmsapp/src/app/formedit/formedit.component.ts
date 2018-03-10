import { Component, OnInit } from '@angular/core';
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
        this.data.push(res);
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

  save() {
    this.router.navigate(['/device']);
  }


}
