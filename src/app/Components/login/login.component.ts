import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Observable, filter, find, first, map, take } from 'rxjs';
import { Client } from 'src/app/Interfaces/client';
import { ApiService } from 'src/app/Services/api-service.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  listaClient$!: Observable<Client[]>;
  listaClient: Client[] = [];
  loginForm! : FormGroup
  paramLogin : boolean = false;


  constructor(private apiService: ApiService, private authService : AuthService, private router : Router) {}
  ngOnInit(): void {
    //Utilizzo questo metodo per crearmi un oggetto cliente e riusarlo per operazioni
    // this.apiService.getClients().subscribe((data: any) => {
    //   this.listaClient = Object.keys(data).map((key) => {
    //     return data[key];
    //   })});


  //   //Utilizzo questo metodo con il pipe per poter eseguire flusso di operazioni e fare la subscribe x poter visualizzare i dati
  // this.apiService.getClients().pipe(map((data:any)=>
  //     Object.keys(data)
  //     .map((key)=>{return data[key]}))).subscribe((listaClient : Client[])=>{
  //       this.listaClient = listaClient;
  //     } )

      //Utilizzo questo metodo se non voglio manipolare i dati e visualizzarli sull'HTML
  // this.apiService.getClients().subscribe((listaClient : Client[])=>{
  //   this.listaClient = listaClient;
  // })

  this.loginForm= new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  }


  onSubmit(){
    this.apiService.getClients().subscribe((data: any) => {
      Object.keys(data).map((key) => {
      if(this.loginForm.value.password == data[key].password && this.loginForm.value.username == data[key].username){

        const username = this.loginForm.value.username
        const password = this.loginForm.value.password
        localStorage.setItem('username',username);
        localStorage.setItem('password',password)


        this.paramLogin = true;
         return this.authService.isLogged=true;
      }
      this.reindirizza()
        return data[key];
      })});
  }

  reindirizza(){
    this.router.navigate(['/catalogo'])
  }
}


//first
  // this.apiService.getClients().subscribe((data: any) => {
  // this.listaClient = Object.keys(data).map((key) => {
  //   return data[key];
  // });
