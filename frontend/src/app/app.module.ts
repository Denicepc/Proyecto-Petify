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
import { Ejercicio3Component } from './components/ejercicio3/ejercicio3.component';
import { CnewEj5Component } from './components/cnew-ej5/cnew-ej5.component';
import { CNewPadre6Component } from './components/cnew-padre6/cnew-padre6.component';
import { CNewHijo6Component } from './components/cnew-hijo6/cnew-hijo6.component';
import { Ejercicio7Component } from './components/ejercicio7/ejercicio7.component';
import { Epadre4Component } from './components/epadre4/epadre4.component';
import { Ehijo4Component } from './components/ehijo4/ehijo4.component';
import { Ejercicio8padreComponent } from './components/ejercicio8padre/ejercicio8padre.component';
import { Ejercicio8hijoComponent } from './components/ejercicio8hijo/ejercicio8hijo.component';
import { Ejercicio13Component } from './components/ejercicio13/ejercicio13.component';


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
    Ejercicio3Component,
    CnewEj5Component,
    CNewPadre6Component,
    CNewHijo6Component,
    Ejercicio7Component,
    Epadre4Component,
    Ehijo4Component,
    Ejercicio8padreComponent,
    Ejercicio8hijoComponent,
    Ejercicio13Component

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
