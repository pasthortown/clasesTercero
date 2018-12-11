import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FactorialComponent } from './body/factorial/factorial.component';
import { Ej1Component } from './body/ej1/ej1.component';
import { Ej2Component } from './body/ej2/ej2.component';
import { Ej3Component } from './body/ej3/ej3.component';
import { Ej4Component } from './body/ej4/ej4.component';
import { PruebaComponent } from './prueba/prueba.component';
import { ModuleComponent } from './module/module.component';
import { AppRoutingModule } from './/app-routing.module';
import { Prueba\routingModule } from './prueba/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    SidebarComponent,
    FooterComponent,
    FactorialComponent,
    Ej1Component,
    Ej2Component,
    Ej3Component,
    Ej4Component,
    PruebaComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Prueba\routingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
