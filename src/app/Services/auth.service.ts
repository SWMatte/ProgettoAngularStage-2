import { Injectable } from '@angular/core';
import { authGuardGuard } from '../Guard/auth-guard.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged=true;



  isAuthenticated(){
    return this.isLogged;
  }
  constructor() { }
}
