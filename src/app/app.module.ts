import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';  
import { HomeComponent } from './home/home.component';  
import { ResumenComponent } from './resumen/resumen.component';  

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule  
  ],
  providers: [],

})
export class AppModule { }

