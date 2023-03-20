import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { AutorListaComponent } from './autor-lista/autor-lista.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';

const appRoutes: Routes = [
  { path: 'libros', component: LibroListaComponent },
  { path: 'libros/:id', component: LibroDetalleComponent },
  { path: 'autores', component: AutorListaComponent },
  { path: '', redirectTo: '/libros', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LibroListaComponent,
    AutorListaComponent,
    NotFoundComponent,
    LibroDetalleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
