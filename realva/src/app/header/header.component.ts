import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';
import { AuthService } from '../../services/auth.service';
import { RegisterPage } from '../../pages/register/register';
import {LoginRegisterProvider} from '../../providers/login-register/login-register'
import { ProfilePage } from '../../pages/profile/profile';


@Component({
  selector: 'app-header',
  template: `
  <ion-buttons end>
  <button ion-button [navPush]="perfil" *ngIf="LoginRegister.userLogged != null">Perfil</button>
  <button ion-button (click)="LoginRegister.LogOut()" *ngIf="LoginRegister.userLogged != null">Cerrar Sesion</button>
  <button ion-button [navPush]="login" *ngIf="LoginRegister.userLogged == null">Iniciar Sesion</button>
  <button ion-button [navPush]="register" *ngIf="LoginRegister.userLogged == null"> Registrarse </button>
  </ion-buttons>`,
  styles: []
})
export class HeaderComponent implements OnInit {

  @ViewChild(Nav) nav: Nav;

  login = LoginPage;
  perfil = ProfilePage;
  register = RegisterPage;
  constructor(private auth: AuthService, private navCtrl: NavController,private LoginRegister: LoginRegisterProvider) { }
  ngOnInit() { }
  logIn() {
    this.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  logOut() {
    this.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }

  signUp() {
    this.navCtrl.setRoot(RegisterPage);
  }
}