import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from 'angular2-google-maps/core';


const rutasDenavegacion: Routes=[{path:'login',component:LoginComponent},
{path: '', redirectTo:'/login',pathMatch: 'full'},
{path: '**',component:GoogleMapsComponent}]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GoogleMapsComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutasDenavegacion),
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAONVaIzU_ppdeDH80ZUrUAxFvLxL7Kbgc'
    }),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

latitud: number =  -34.606562;
longitud: number = -58.392633;
 }
