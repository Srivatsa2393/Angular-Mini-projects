import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { TransformProvider } from '../providers/transform/transform.provider';
import { Keyobject } from './keyObject.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Keyobject
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AppService, TransformProvider],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
