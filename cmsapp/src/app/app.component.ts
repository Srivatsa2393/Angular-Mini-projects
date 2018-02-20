import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { TransformService } from '../services/transform/transform.service';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //public data: object;

  data: any = [];

  constructor(public dataService: DataService, public transformService: TransformService) {
    /*this.dataService.getSystemXml()
      .subscribe((res: string) => {
        this.data = res;
        console.log(this.data);
      })*/

    this.dataService.getSystemXml()
      .pipe(
      map((res: string) => 
        this.transformService.convertToJson(res)
      )
      ).subscribe((res: Object) => {
        this.data = res;
        console.log(this.data);
      })

  }

  ngOnInit() {

  }
}
