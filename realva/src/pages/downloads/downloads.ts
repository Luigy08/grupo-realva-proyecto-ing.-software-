import { ProductPage } from './../product/product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
import {AdminPage} from "../admin/admin";
import {ProfilePage} from "../profile/profile"
import {AuthService} from "../../services/auth.service";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the DownloadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-downloads',
  templateUrl: 'downloads.html',
})
export class DownloadsPage {
  login = LoginPage;
  register = RegisterPage;
  Admin = AdminPage;
  Profile = ProfilePage;

  descargaRef: any;
  descargas: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public LoginRegister: LoginRegisterProvider, public auth:AuthService, public afDatabase: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.descargaRef= afDatabase.list('descargas');
    this.descargas = this.descargaRef.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadsPage');
  }

}
