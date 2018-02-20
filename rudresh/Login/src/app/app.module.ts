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
import { DisplayComponent } from './display/display.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'display', component: DisplayComponent }
] 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeviceInfoComponent,
    DisplayComponent
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
