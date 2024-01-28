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
import { E14padreComponent } from './components/e14padre/e14padre.component';
import { E14hijoComponent } from './components/e14hijo/e14hijo.component';
import { Epadre16Component } from './components/epadre16/epadre16.component';
import { Ehijo16Component } from './components/ehijo16/ehijo16.component';
import { Epadre17Component } from './components/epadre17/epadre17.component';
import { Ehijo17Component } from './components/ehijo17/ehijo17.component';
import { E20proveedorComponent } from './components/e20proveedor/e20proveedor.component';
import { E22hijoComponent } from './components/e22hijo/e22hijo.component';

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
    E14padreComponent,
    E14hijoComponent,
    Epadre16Component,
    Ehijo16Component,
    Epadre17Component,
    Ehijo17Component,
    E20proveedorComponent,
    E22hijoComponent,

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
