import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { LoginRegisterProvider } from '../../providers/login-register/login-register';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: any;
  clientes: AngularFireList<any>;
  clientesref: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase, public LoginRegister: LoginRegisterProvider) {
    this.clientesref = afDatabase.list('clientes');
    this.user = this.LoginRegister.userLogged;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }





  eliminarClientes() {
    var mensaje = confirm("¿Seguro que desea Eliminar su cuenta?");
    if (mensaje) {
      this.navCtrl.pop();
      let temp = this.LoginRegister.userLogged.id;
      this.LoginRegister.LogOut();
      this.clientesref.remove(temp);
    }
  }

}
