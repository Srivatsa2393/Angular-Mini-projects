import { Component } from '@angular/core';
import { AppService } from './app.service';
import { TransformProvider } from '../providers/transform/transform.provider';
import { map } from 'rxjs/operators/map';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //public data: object;
  //constructor(private appService: AppService) {}

/*   callNotes() {
    this.appService.getNotes()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
      })
  } */

  datas: any = [];
  keys: any = [];
  constructor(public appService: AppService,
              public transformProvider: TransformProvider
  ) {
    this.appService.getNotes()
    .pipe(
      map((res: string) => 
        this.transformProvider.convertToJson(res)
  )
    ).subscribe((res: Object) => {
      for(let key in res){
        this.datas.push(res[key]);
        this.keys.push(key);
      }
      //this.datas = res;
        console.log(res);
      });
  }

  ngOnInit() {

  }

}
