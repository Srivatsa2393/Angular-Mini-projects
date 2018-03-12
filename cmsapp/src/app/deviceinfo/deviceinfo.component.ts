import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { TransformService } from '../../services/transform/transform.service';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-deviceinfo',
  templateUrl: './deviceinfo.component.html',
  styleUrls: ['./deviceinfo.component.css']
})
export class DeviceinfoComponent implements OnInit {

  public data:any = [];
  public datas:any = [];

  constructor(private dataService: DataService, public transformService: TransformService) {

    this.dataService.getMeasureXml()
      .pipe(
        map((res:string) => 
          this.transformService.convertToJson(res)
        )
      ).subscribe((res: Object) => {
        this.data = res;
        //this.data.push(res);
        console.log(this.data);
      })

      this.dataService.getSystemXml()
      .pipe(
      map((res: string) => 
        this.transformService.convertToJson(res)
      )
      ).subscribe((res: Object) => {
        this.datas = res;
        console.log(this.datas);
      })
   }

  ngOnInit() {
  }

}
