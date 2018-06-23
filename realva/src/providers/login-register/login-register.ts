import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
/*
  Generated class for the LoginRegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginRegisterProvider {
  AdminAuth: boolean = false;
  ClientAuth: boolean = false;
  userLogged: any;
  constructor(private alertCtrl: AlertController, public http: Http, public afDatabase: AngularFireDatabase) {
  }
  chargeUsers() {

  }
  AdminLogin() {
    this.AdminAuth = !this.AdminAuth;
  }

  
  LogOut() {
    this.userLogged = null;
  }
  Register(Data,estado) {
    console.log(Data);
    let clientesRef = this.afDatabase.list('clientes').push({});
    clientesRef.set({id:clientesRef.key,ClaveCliente:0,NombreEmpresa:Data.username,NombreRepresentante:Data.userlastname,RTN:Data.RTN,Estatus:estado,Telefono1:Data.telephone,Telefono2:0,Contraseña:Data.password,Clasificacion:0,Saldo:0,Direccion:Data.direction,Correo:Data.email});
    this.presentAlert("Registro Exitoso", "Se logro registrar con exito", "OK");
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
