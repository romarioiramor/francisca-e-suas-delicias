import { BolosemcaldaComponent } from './bolosemcalda/bolosemcalda.component';
import { SobremesasComponent } from './sobremesas/sobremesas.component';
import { PaesComponent } from './paes/paes.component';
import { LanchesComponent } from './lanches/lanches.component';
import { BolosComponent } from './bolos/bolos.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  /* home */
  {
    path: '',
    component: HomeComponent
  },

  /* bolos */
  {
    path: 'bolos',
    component: BolosComponent
  },

  /* lanches */
  {
    path: 'lanches',
    component: LanchesComponent
  },

  /* paes */
  {
    path: 'paes',
    component: PaesComponent
  },

  /* sobremesas */
  {
    path: 'sobremesas',
    component: SobremesasComponent
  },
  /* bolo sem calda */
  {
    path: 'bolosemcalda',
    component: BolosemcaldaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
