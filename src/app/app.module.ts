import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';
// import { QuoteService} from '../services/quote.service';  // add this
import { GameComponent} from '../app/game/game.component'; //add this
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { GameService } from '../app/game.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent, // components added go here
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MaterialModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule, // imported modules go in imports
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [], AppRoutingModule, RouterModule,
  ],
  providers: [GameService],  //services go in providers
  bootstrap: [AppComponent]
})
export class AppModule { }
