import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadComponent } from './components/head/head.component';
import { LatderComponent } from './components/latder/latder.component';
import { LatizqComponent } from './components/latizq/latizq.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { ProductoComponent } from './components/producto/producto.component';
import { MisComprasComponent } from './components/mis-compras/mis-compras.component';
import { Ejercicio15Component } from './components/ejercicio15/ejercicio15.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    CategoriasComponent,
    FooterComponent,
    HeadComponent,
    LatderComponent,
    LatizqComponent,
    LoginComponent,
    MainComponent,
    PanelAdminComponent,
    ProductoComponent,
    MisComprasComponent,
    Ejercicio15Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
