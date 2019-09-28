import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static autenticado: boolean = false;
  login() { true }
  logout() { false }
  Autenticado() { AuthService.autenticado }

  constructor() { }
}
