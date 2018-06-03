import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginRegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginRegisterProvider {
  AdminAuth:boolean=false;
  ClientAuth:boolean=false;
  constructor() {
    console.log('Hello LoginRegisterProvider Provider');
  }
  AdminLogin(){
    this.AdminAuth = !this.AdminAuth;
  }

  Login(){

  }
  LogOut(){

  }
  Register(){
    
  }
}
