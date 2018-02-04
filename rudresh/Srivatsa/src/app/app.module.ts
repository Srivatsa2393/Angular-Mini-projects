import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { NgModule } from '@angular/core';
import {TestService } from "./test-service";
import {XmlParserService} from "./xmlParser.service";
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [TestService,XmlParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
