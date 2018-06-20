import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
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

  usuarioRef: any;
  usuarios: AngularFireList<any>;
  constructor(private alertCtrl: AlertController, public http: Http, public afDatabase: AngularFireDatabase,public afAuth: AngularFireAuth ) {
    this.usuarioRef = afDatabase.list('clientes');
    this.usuarios = this.usuarioRef.valueChanges();
  }
  chargeUsers() {
    
   
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
    console.log(Data);
    let ident: number;
    let subir = { name: Data.username, last_name: Data.userlastname, status: 1, clase: 0, rtn: Data.RTN, phone: Data.telephone, email: Data.email, password: Data.password };
    this.http.post('https://realva.000webhostapp.com/server/register.php', JSON.stringify(subir)).map(res => res.json()).subscribe(res => {
      if (res != "") {
        /*console.log(res);*/
        ident = res;
        let subir2 = { phone: Data.telephone, id: res };
        this.http.post('https://realva.000webhostapp.com/server/register_phone.php', JSON.stringify(subir2)).subscribe(res => {
        });
        let subir1 = { rtn: Data.RTN, id: res };
        this.http.post('https://realva.000webhostapp.com/server/register_rtn.php', JSON.stringify(subir1)).subscribe(res => {
        });
        let subir3 = { email: Data.email, password: Data.password, id: ident };
        this.http.post('https://realva.000webhostapp.com/server/register_user.php', JSON.stringify(subir3)).subscribe(res => {
        });
      }
    });

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
