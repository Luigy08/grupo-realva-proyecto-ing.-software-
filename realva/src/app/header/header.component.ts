import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';
import { AuthService } from '../../services/auth.service';
import { RegisterPage } from '../../pages/register/register';


@Component({
  selector: 'app-header',
  template: `
    <ion-buttons end>
      <button ion-button *ngIf="auth.getEmail()">{{auth.getEmail()}}</button>
      <button ion-button (click)="logOut()" *ngIf="auth.authenticated">
        <ion-icon name="log-out" item-left></ion-icon>
        Log out
      </button>

      <button ion-button (click)="logIn()" *ngIf="!auth.authenticated">
        <ion-icon name="log-in" item-left></ion-icon>
        Log in
      </button>

      <button ion-button (click)="signUp()" *ngIf="!auth.authenticated">
        <ion-icon name="log-in" item-left></ion-icon>
        Registrarse
      </button>
    </ion-buttons>`,
  styles: []
})
export class HeaderComponent implements OnInit {

  @ViewChild(Nav) nav: Nav;


  constructor(private auth:AuthService, private navCtrl:NavController) {}
  ngOnInit() {}
  logIn(){
    this.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }
  
  logOut(){
    this.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }
  
  signUp(){
    this.navCtrl.setRoot(RegisterPage);
  }
}