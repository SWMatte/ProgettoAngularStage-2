import { AfterContentChecked, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Carrello } from 'src/app/Interfaces/carrello';
import { Prodotto } from 'src/app/Interfaces/prodotto';
import { ApiService } from 'src/app/Services/api-service.service';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  nomeProdotto:string = '';
  idProdotto : number = 0;
  prodotto! : Prodotto;
  cartForm! : FormGroup;
  prezzoProd : number = 0;

  data: Carrello[] = [];
  isEditMode: boolean = false;

  constructor(private route : ActivatedRoute, private apiService : ApiService, private router: Router, private cart : CartServiceService){}


  ngOnInit(): void {

    this.cartForm = new FormGroup({
      nomeProd : new FormControl(''),
      quantitaProd : new FormControl('',Validators.required)
    })

    this.route.paramMap.subscribe((params : ParamMap) =>{
      this.idProdotto = +params.get('idProdotto')!
    })

    this.route.params.subscribe(params =>{
      this.idProdotto = params['idProdotto']
    })


    this.route.queryParams.subscribe(params => {
      this.nomeProdotto = params['nome'];
      this.prezzoProd = params['prezzo']
    });

  }

  aggiungiElementoAlCarrello(quantita : number, prezzo : number, nome : string): void {
    let elemento : Carrello = {quantita : quantita, prezzo : prezzo, nome : nome}

    if(this.isEditMode){
      this.data = this.data.map((e:any)=>({
        ...e,
        nome: elemento.nome,
        quantita: elemento.quantita
      }));

    }else {
      this.data = [...this.data, elemento];
    }

    this.cartForm.patchValue({
      nomeProd : "",
      quantitaProd : 0
    });
  }

  onSubmit(){
    //this.router.navigate([], { replaceUrl: false });
  }

  onChangeItem(param:any){
    console.log(param);
    this.isEditMode = true;
    this.cartForm.patchValue({
      nomeProd : param.nome,
      quantitaProd : param.quantita
    });

  }

  onDeleteItem(param:any){
    this.data = this.data.filter((e:any)=> e.nome !== param.nome);
  }

  onInfoItem(param:any){
    console.log(param);

  }



  onSort(param: any){
    const columnName = param.name;
    const columnSort = param.sort;
    this.data.sort((a:any,b:any)=> {
      if(columnSort === "ASC"){
        if (a[columnName] > b[columnName]) {
          return 1;
        }
        if (a[columnName] < b[columnName]) {
          return -1;
        }
        return 0;
      }else{
        if (b[columnName] > a[columnName]) {
          return 1;
        }
        if (b[columnName] < a[columnName]) {
          return -1;
        }
        return 0;
      }
    })
  }

  onSearch(param : any){

    let provv:any[]=[]
    let dataTemp:any[]=[]

    provv = this.data.filter((e)=>e.nome == param.value)
    dataTemp = this.data

    if(provv.length){
      return this.data = provv
    }
    if(param=''){
      return this.data = dataTemp
    }
    return this.data
  }


}
