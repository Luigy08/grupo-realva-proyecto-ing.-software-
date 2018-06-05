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
    this.http.get('https://realva.000webhostapp.com/get_users.php').map(res => res.json()).subscribe(data => {
      this.users = data, err => {
        console.log("Oops!");
      };
    });
  }
  AdminLogin() {
    this.AdminAuth = !this.AdminAuth;
  }

  Login(Data) {
    let data = {
      email: Data.username,
      password: Data.password
    }
    let user_role = "";
    this.http.post('https://realva.000webhostapp.com/login.php', JSON.stringify(data)).map(res => res.json()).subscribe(res => {
      if (res != "") {
        if (res[0].user_role == "admin") {
          console.log(res[0].user_role == "admin");
          this.AdminAuth = true;
          return true;
        }
      } else {
        console.log("bad");
      }
    });
    return false;
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
