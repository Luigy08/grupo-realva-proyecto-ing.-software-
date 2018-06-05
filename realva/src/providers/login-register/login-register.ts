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
  AdminAuth: boolean = false;
  ClientAuth: boolean = false;
  users: any;
  constructor(private alertCtrl: AlertController, public http: Http) {
  }
  chargeUsers() {
    this.http.get('https://realva.000webhostapp.com/server/get_users.php').map(res => res.json()).subscribe(data => {
      this.users = data, err => {
        console.log("Oops!");
      };
    });
  }
  AdminLogin() {
    this.AdminAuth = !this.AdminAuth;
  }

  LogOut() {
    this.AdminAuth = false;
    this.ClientAuth = false;
  }
  Register(Data) {
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
