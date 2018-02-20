import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TransformService } from '../services/transform/transform.service';
import { DataService } from '../services/data/data.service';

const appRoutes: Routes = [
  { path: '', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent
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
