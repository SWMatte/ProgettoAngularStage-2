import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { DescrizioneProdottoComponent } from './Components/descrizione-prodotto/descrizione-prodotto.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuardGuard } from './Guard/auth-guard.guard';
import { CartComponent } from './Components/cart/cart.component';
import { RiepilogoComponent } from './Components/riepilogo/riepilogo.component';
import { RegistrazioneUtenteComponent } from './Components/registrazione-utente/registrazione-utente.component';
import { AppComponent } from './app.component';
import { ListaClientiComponent } from './Components/lista-clienti/lista-clienti.component';

const routes: Routes = [
  {
    path: 'catalogo',
    component: CatalogComponent,
    canActivate: [authGuardGuard],
    children:[
      {
        path:':idProdotto',
        component: CartComponent,
        children:[
          {
            path:'riepilogo/:qta',
            component: RiepilogoComponent
        }
        ]
      },
      {
        path:'descrizione/:id',
        component: DescrizioneProdottoComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrazione',
    component: RegistrazioneUtenteComponent
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'clienti',
    component: ListaClientiComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
