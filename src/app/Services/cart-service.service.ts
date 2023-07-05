import { Injectable } from '@angular/core';
import { Carrello } from '../Interfaces/carrello';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {


  listaCarrello: Carrello[] = [];

  constructor() {}

  getListaCarrello(): Carrello[] {
    return this.listaCarrello;
  }

  aggiungiElementoAlCarrello(quantita : number, prezzo : number, nome : string) {
    let elemento : Carrello = {quantita : quantita, prezzo : prezzo, nome : nome}
    //this.listaCarrello.push(elemento);
    this.listaCarrello = [...this.listaCarrello,elemento]
  }

  getNomeProdotto(): string[] {
    const arr:string[] = [];
    for(let i = 0; i<this.listaCarrello.length; i++){
      arr.push(this.listaCarrello[i].nome);
    }
    return arr;
  }
}
