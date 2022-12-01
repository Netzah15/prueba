import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud/crud.component';
import { HomeComponent } from './components/home/home.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { HttpClientModule } from '@angular/common/http';
import { EditCatComponent } from './components/edit-cat/edit-cat.component';
import { EditArtComponent } from './components/edit-art/edit-art.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    HomeComponent,
    ArticuloComponent,
    EditCatComponent,
    EditArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
