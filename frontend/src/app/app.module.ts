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
import { Ejercicio34Component } from './components/ejercicio34/ejercicio34.component';
<<<<<<< HEAD
import { Ejercicio34int2Component } from './components/ejercicio34int2/ejercicio34int2.component';

=======
import { Ejericicio34int2Component } from './components/ejericicio34int2/ejericicio34int2.component';
>>>>>>> 08c1a010a98625ca0ae43368c58e70ca94d99ff7
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
    Ejercicio34Component,
<<<<<<< HEAD
    Ejercicio34int2Component,

=======
    Ejericicio34int2Component
>>>>>>> 08c1a010a98625ca0ae43368c58e70ca94d99ff7
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
