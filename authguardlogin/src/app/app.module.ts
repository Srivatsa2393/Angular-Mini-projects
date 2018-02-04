import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthguardGuard } from './authguard.guard';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DeviceComponent } from './device/device.component';
import { LoginService } from './services/login.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'device', component: DeviceComponent, canActivate: [AuthguardGuard] }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
