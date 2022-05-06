import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MoviesComponent } from './movies.component';
import { BriyaniTypesComponent } from './BriyaniTypes/BriyaniTypes.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MoviesComponent,
    BriyaniTypesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
