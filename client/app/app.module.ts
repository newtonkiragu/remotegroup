import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {BlogsComponent} from './components/blogs/blogs.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent,BlogsComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
