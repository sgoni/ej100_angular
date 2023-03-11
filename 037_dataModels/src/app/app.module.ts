import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';

@NgModule({
  declarations: [
    AppComponent,
    BibliotecaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
