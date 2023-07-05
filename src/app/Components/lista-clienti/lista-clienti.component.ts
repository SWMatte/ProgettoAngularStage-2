import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/Interfaces/client';
import { ApiService } from 'src/app/Services/api-service.service';
import { UpdateformComponent } from '../updateform/updateform.component';

@Component({
  selector: 'app-lista-clienti',
  templateUrl: './lista-clienti.component.html',
  styleUrls: ['./lista-clienti.component.css'],
})
export class ListaClientiComponent implements OnInit {
  listaClienti: Client[] = [];
  displayedColumns: string[] = [
    'position',
    'username',
    'password',
    'modifica',
    'elimina',
  ];
  idClient: number[] = [];

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.apiService.getClients().subscribe((data: Client[]) => {
      this.listaClienti = data;
      data.map((cliente: Client, index: number) => this.idClient.push(index));
    });
  }

  deleteClientById(id: number) {
    this.apiService.deleteClientById(id).subscribe();
    window.location.reload();
  }

  openDialog(index: number) {
    this.dialog.open(UpdateformComponent,{
      data:{index}
    })
  }
}
