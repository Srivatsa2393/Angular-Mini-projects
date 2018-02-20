import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service'
import {XmlParserService} from '../xmlParser.service'
import * as $ from 'jquery';
declare var libraryVar: any;

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent implements OnInit {

  public data:object;
  constructor(private testService:TestService,private xmlParserService:XmlParserService){};
    ngOnInit(){
      this.testService.getSystemXmlData().subscribe(result=> {
        //call local jquery function to convert xml string to json object
        this.data = this.xmlParserService.parseXml2Json(result); 
        //log the data to see the object
        console.log(this.data);
      });
      
    /*   this.testService.getMeasureXmlData().subscribe(result => {
        //use the xmlParser to convert it to xml
        this.data = this.xmlParserService.parseXml2Json(result);
        console.log(this.data);
      }) */
  }

}
