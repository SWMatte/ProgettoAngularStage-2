import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Prodotto } from 'src/app/Interfaces/prodotto';
import { ApiService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-descrizione-prodotto',
  templateUrl: './descrizione-prodotto.component.html',
  styleUrls: ['./descrizione-prodotto.component.css'],
})
export class DescrizioneProdottoComponent implements OnInit {
  prodotti: Prodotto[] = [];
  descrizioni : string = '';
  idProdotto: number = 0;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.apiService
        .getProdottoById(+params.get('id')!)
        .subscribe((prodotti: Prodotto) => {
         this.descrizioni = prodotti.descrizioneProdotto

        });
      });
    }
  }

//+params.get('idProdotto')!
