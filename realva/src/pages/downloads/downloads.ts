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
  public filterList: Array<any>;
  public loadedfilterList: Array<any>;
  public filterRef: firebase.database.Reference;

  descargaRef: any;
  descargas:   AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public LoginRegister: LoginRegisterProvider, public auth:AuthService, public afDatabase: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.filterRef = afDatabase.database.ref('descargas');
    this.filterRef.on('value', productList => {
      let descargas = [];
      productList.forEach(usuario => {
        descargas.push(usuario.val());
        return false;
      });
      this.filterList = descargas;
      this.loadedfilterList = descargas;
    });
    console.log(this.filterList);
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
    this.filterList = this.filterList.filter((v) => {
      if (v.nombre && q) {
        if (v.nombre.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  initializeItems(): void {
    this.filterRef.on('value', productList => {
      let descargas = [];
      productList.forEach(usuario => {
        descargas.push(usuario.val());
        return false;
      });
      this.filterList = descargas;
      this.loadedfilterList = descargas;
    });
    this.filterList = this.loadedfilterList;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadsPage');
  }

}
