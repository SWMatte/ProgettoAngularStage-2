import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/Interfaces/prodotto';
import { ApiService } from 'src/app/Services/api-service.service';
import { DescrizioneProdottoComponent } from '../descrizione-prodotto/descrizione-prodotto.component';
import { MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { Observable, Subject, Subscription, map, takeUntil } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { Carrello } from 'src/app/Interfaces/carrello';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers:[]
})
export class CatalogComponent implements OnInit, CartServiceService {

  destroy$:Subject<void> = new Subject<void>();
  listaProdotti:Prodotto[] = [];
  listaProdotti$!:Observable<Prodotto[]>;
  productSubscribe!: Subscription;
  idProdotto:number = 0;
  descrizione!:Observable<any>;

  constructor(private apiService : ApiService,public dialog: MatDialog, private route: ActivatedRoute){}
  getNomeProdotto(): string[] {
    throw new Error('Method not implemented.');
  }

  listaCarrello: any[] = [];

  getListaCarrello(): any[] {
    return this.listaCarrello;
  }
  aggiungiElementoAlCarrello(elemento: any): void {
    this.listaCarrello.push(elemento);
  }

    ngOnInit(): void {

      //get
      this.apiService.getProducts().pipe(map((data:any)=>
        this.listaProdotti = Object.keys(data)
        .map((key)=>{
          return data[key]})
      )).subscribe((listaProdotti : Prodotto[])=>{
        this.listaProdotti=[...listaProdotti]
      })



  //   this.apiService.getProducts()
  //   .pipe(takeUntil(this.destroy$))
  //     .subscribe((data:any)=>{
  //     this.listaProdotti = Object.keys(data).map((key)=>{return data[key]})
  // })

  }




}

// this.productSubscribe = this.apiService.getProducts().subscribe((data:any)=>{
//   this.listaProdotti = Object.keys(data).map((key)=>{return data[key]})
// })
