import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MoviesComponent } from './movies.component';
import { BriyaniTypesComponent } from './BriyaniTypes/BriyaniTypes.component';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [BrowserModule, FormsModule,MatButtonModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MoviesComponent,
    BriyaniTypesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
