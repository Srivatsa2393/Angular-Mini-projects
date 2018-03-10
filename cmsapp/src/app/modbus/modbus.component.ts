import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { TransformService } from '../../services/transform/transform.service';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-modbus',
  templateUrl: './modbus.component.html',
  styleUrls: ['./modbus.component.css']
})
export class ModbusComponent implements OnInit {

  public data: any = [];
  public datas:any = [];

  constructor(public dataService: DataService, public transformService: TransformService) { 
    this.dataService.getEmailXml()
      .pipe(
        map((res: string) => 
          this.transformService.convertToJson(res)
        )
        ).subscribe((res: Object) => {
          this.data = res;
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
