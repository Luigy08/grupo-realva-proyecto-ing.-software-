import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

/*
  Generated class for the LoginRegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginRegisterProvider {
  AdminAuth:boolean=false;
  ClientAuth:boolean=false;
  constructor(private alertCtrl: AlertController) {
    console.log('Hello LoginRegisterProvider Provider');
  }
  AdminLogin(){
    this.AdminAuth = !this.AdminAuth;
  }

  Login(Data){
    this.presentAlert(Data.username,Data.password,"ok");
  }
  LogOut(){

  }
  Register(Data){
  }
  presentAlert(Title, SubTitle, Button) {
    let alert = this.alertCtrl.create({
      title: Title,
      subTitle: SubTitle,
      buttons: [Button]
    });
    alert.present();
  }
}
