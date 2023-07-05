import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-registrazione-utente',
  templateUrl: './registrazione-utente.component.html',
  styleUrls: ['./registrazione-utente.component.css'],
})
export class RegistrazioneUtenteComponent implements OnInit {
  registrazioneForm!: FormGroup;
  hide = true;
  isDisabled = true;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.registrazioneForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });


  }

  onSubmit() {
    if (this.registrazioneForm.valid) {
      this.apiService.addClient(this.registrazioneForm.value).subscribe();
      this.reindirizza();
    }
  }

  reindirizza() {
    this.router.navigate(['/login']);
  }
}
