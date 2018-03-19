import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TransformService } from '../services/transform/transform.service';
import { DataService } from '../services/data/data.service';
import { FormeditComponent } from './formedit/formedit.component';
import { DevicedetailsComponent } from './devicedetails/devicedetails.component';
import { DeviceinfoComponent } from './deviceinfo/deviceinfo.component';
import { ModbusComponent } from './modbus/modbus.component';
import { ObjectPipe } from './object.pipe';

const appRoutes: Routes = [
  { path: '', component: FormeditComponent },
  { path: 'device', component: DevicedetailsComponent },
  { path: 'deviceInfo', component: DeviceinfoComponent },
  { path: 'email', component: ModbusComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FormeditComponent,
    DevicedetailsComponent,
    DeviceinfoComponent,
    ModbusComponent,
    ObjectPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TransformService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
