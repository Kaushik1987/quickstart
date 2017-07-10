import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FooterComponent } from "./shared/footer.component";
import { NavComponent } from "./shared/nav.component";
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { AppRoutingModue } from "./shared/app.routing";
import { AdminModule } from "./admin/admin.module";

@NgModule({
imports: [ 
            BrowserModule,
            AdminModule,
            AppRoutingModue,            
  ],
  declarations: [
                  AppComponent ,
                  NavComponent,
                  FooterComponent,
                  HomeComponent,
                  ErrorComponent                  
                ],
  bootstrap:    [
                   AppComponent 
                ]
})
export class AppModule { }
