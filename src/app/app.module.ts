import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'; // add this for api
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { QuoteService} from '../services/quote.service';  // add this
import { QuoteBoxComponent} from '../quote-box/quote-box.component'; //add this

@NgModule({
  declarations: [
    AppComponent,
    QuoteBoxComponent, // components added go here
    //AngularFontAwesomeModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule // imported modules go in imports
  ],
  providers: [QuoteService],  //services go in providers
  bootstrap: [AppComponent]
})
export class AppModule { }
