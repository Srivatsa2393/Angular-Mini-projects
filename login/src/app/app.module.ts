import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { TestService } from './test.service';
import { DeviceInfoComponent } from './device-info/device-info.component';
import { XmlParserService } from './xmlParser.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'deviceInfo', component: DeviceInfoComponent }
] 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeviceInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService, TestService, XmlParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
