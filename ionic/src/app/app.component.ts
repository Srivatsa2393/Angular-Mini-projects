import { Component } from '@angular/core';
import { DataService } from './data.service';
import { TransformService } from './transform.service';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: DataService, private transformService: TransformService) {

    this.dataService.getRandomUser()
      .pipe(
        map((res: string) => this.transformService.convertToJson(res))
      )
      .subscribe((res: Object) => {
        console.log(res);
      });
  }
  
}
