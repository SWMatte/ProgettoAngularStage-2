import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Client } from 'src/app/Interfaces/client';
import { ApiService } from 'src/app/Services/api-service.service';
import { ListaClientiComponent } from '../lista-clienti/lista-clienti.component';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit{

  updateForm! : FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private router : Router, private apiService : ApiService, public dialogRef: MatDialogRef<ListaClientiComponent>){}



  ngOnInit(): void {

  this.updateForm= new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  }


  reindirizza(){
   this.router.navigate(['/clienti'])
  }

  onSubmit(){
    let cliente : Client = {id: this.data.index, username: this.updateForm.value.username, password: this.updateForm.value.password}
    this.apiService.updateClientById(cliente).subscribe();
    window.location.reload();
    this.dialogRef.close();
  }

}
