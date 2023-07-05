import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Prodotto } from '../Interfaces/prodotto';
import { Client } from '../Interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts():Observable<Prodotto[]>{
    return this.http.get<Prodotto[]>('http://localhost:8080/prodotto');
  }

  // addProduct(body: any): Observable<any> {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');

  //   const prodotto: Prodotto = {
  //     nomeProdotto: body.nomeProdotto,
  //     prezzoProdotto: body.prezzoProdotto,
  //     statoProdotto: body.statoProdotto,
  //     disponibilitaProdotto: body.disponibilitaProdotto,
  //     descrizioneProdotto: body.descrizioneProdotto

  //   };

  //   return this.http.post<any>('http://localhost:8080/prodotto', JSON.stringify(prodotto), { headers });
  // }

  getDescrizioneProdotto(idProdotto: number): Observable<any> {
    return this.http.get('http://localhost:8080/descrprodotto/' + idProdotto)
      .pipe(
        map((response: any) => response.descrizioneProdotto )
      );
  }

  getClients() :Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8080/client')
  }

  getProdottoById(id : number) : Observable<Prodotto>{
    return this.http.get <Prodotto> ('http://localhost:8080/prodotto/'+ id)
  }

  addClient(body : Client): Observable<Client>{
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<Client>('http://localhost:8080/client',JSON.stringify(body),{headers})
  }

  deleteClientById(id : number): Observable<any>{
    return this.http.delete<any>('http://localhost:8080/client/'+ id)
  }

  updateClientById(body : Client): Observable<Client>{
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put<Client>('http://localhost:8080/client',JSON.stringify(body),{headers})
  }
}
