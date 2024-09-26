import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FronteggAppModule, FronteggComponent } from '@frontegg/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,

    /** Import Frontegg Module **/
    FronteggAppModule.forRoot(
      {
        contextOptions: {
          baseUrl: 'https://app-oohqoukz37zh.frontegg.com',
          clientId: '159f6e7d-16df-4985-a734-dbd17e8d3eb5',
          appId: 'f3f1fa43-aabe-4a64-b6e3-b1f8543ee4f2'
        },
        authOptions: {
          //keepSessionAlive: true // Uncomment this in order to maintain the session alive
        },
        hostedLoginBox: true,
      }
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }