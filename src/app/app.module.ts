import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BolosComponent } from './bolos/bolos.component';
import { PaesComponent } from './paes/paes.component';
import { SobremesasComponent } from './sobremesas/sobremesas.component';
import { LanchesComponent } from './lanches/lanches.component';
import { HomeComponent } from './home/home.component';
import { BolosemcaldaComponent } from './bolosemcalda/bolosemcalda.component';

@NgModule({
  declarations: [
    AppComponent,
    BolosComponent,
    PaesComponent,
    SobremesasComponent,
    LanchesComponent,
    HomeComponent,
    BolosemcaldaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
