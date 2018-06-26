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
  
  
}
