import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CurrencyPipe} from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Carrello } from 'src/app/Interfaces/carrello';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.component.html',
  styleUrls: ['./riepilogo.component.css']
})
export class RiepilogoComponent implements OnInit, Carrello{


  @Input()
  nome: string='';
  @Input()
  prezzo: number=0;
  quantita: number=0;
  @Input()qta: number=0;
  carrello! : Carrello;
  transactions: any[] = [];
  dataSource = new MatTableDataSource<CartServiceService>();
  displayedColumns: string[] = ['item', 'cost'];
  calcolo : number = 0;

  constructor(private carrelloService : CartServiceService){}

  ngOnInit(): void {

    this.transactions = this.carrelloService.getListaCarrello();

  }

  getTotalCost() {
    const totalCost = this.carrelloService.getListaCarrello().reduce((acc, item) => acc + (item.prezzo * item.quantita), 0);
    return totalCost;
  }







}
