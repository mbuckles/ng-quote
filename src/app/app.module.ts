import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'; // add this for api
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { QuoteService} from '../services/quote.service';  // add this
import { QuoteBoxComponent} from '../app/quote-box/quote-box.component'; //add this
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    QuoteBoxComponent, // components added go here
    //AngularFontAwesomeModule
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    // RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule, // imported modules go in imports
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  providers: [QuoteService],  //services go in providers
  bootstrap: [AppComponent]
})
export class AppModule { }
