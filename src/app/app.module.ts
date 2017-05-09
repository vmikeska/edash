import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppWin } from './components/base-window.component';

import { AppComponent } from './app.component';

//var $ = {}

@NgModule({
  declarations: [
    AppComponent,
    AppWin
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})


export class AppModule { }
