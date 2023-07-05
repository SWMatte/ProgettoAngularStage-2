import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from'@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {CurrencyPipe} from '@angular/common';
import {MatTableModule} from '@angular/material/table';



import { AppComponent } from './app.component';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { DescrizioneProdottoComponent } from './Components/descrizione-prodotto/descrizione-prodotto.component';
import { LoginComponent } from './Components/login/login.component';
import { CartComponent } from './Components/cart/cart.component';
import { RiepilogoComponent } from './Components/riepilogo/riepilogo.component';
import { RegistrazioneUtenteComponent } from './Components/registrazione-utente/registrazione-utente.component';
import { ListaClientiComponent } from './Components/lista-clienti/lista-clienti.component';
import { UpdateformComponent } from './Components/updateform/updateform.component';
import { TableComponent } from './Components/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    DescrizioneProdottoComponent,
    LoginComponent,
    CartComponent,
    RiepilogoComponent,
    RegistrazioneUtenteComponent,
    ListaClientiComponent,
    UpdateformComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    CurrencyPipe,
    MatTableModule,


  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
