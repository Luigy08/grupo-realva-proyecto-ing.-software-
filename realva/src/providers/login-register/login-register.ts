import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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
  users: any;
  constructor(private alertCtrl: AlertController ,public http: Http) {
    this.http.get('http://localhost/get_users.php').map(res => res.json()).subscribe(data => {
      this.users = data, err => {
        console.log("Oops!");
      };
    });
    var data = {
      email: "test@somewhere.com",
      password: "pass123"
    };
    this.http.post('http://localhost/login.php', data).map(res => res.json()).subscribe(res => {
      if (res != "") {
        console.log(res);
      } else {
        console.log("bad");
      }
    });
  }
  chargeUsers(){
    this.http.get('http://localhost/get_users.php').map(res => res.json()).subscribe(data => {
      this.users = data, err => {
        console.log("Oops!");
      };
    });
  }
  AdminLogin(){
    this.AdminAuth = !this.AdminAuth;
  }

  Login(Data){
    if(Data.username == "realva@gmail.com"){
      if(Data.password == "123"){
        this.AdminAuth = true;
        this.presentAlert("Inicio Sesion","Exitoso","ok");
      }
    }else{
      for (let user of this.users) {
        if(Data.username == user.user_email){
          if(Data.password == user.password){
            this. ClientAuth = true;
            this.presentAlert("Inicio Sesion","Exitoso","ok");
          }
        }
      }
    }
    this.chargeUsers();
  }
  LogOut(){
    this.AdminAuth=false;
    this.ClientAuth=false;
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
