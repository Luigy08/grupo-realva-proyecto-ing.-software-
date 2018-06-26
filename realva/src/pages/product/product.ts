import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {AdminPage} from "../admin/admin";
import {ProfilePage} from "../profile/profile"
import {ShowproductPage} from "../showproduct/showproduct";

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {CotizarPage} from "../cotizar/cotizar";


@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  login = LoginPage;
  register = RegisterPage;
  Admin = AdminPage;
  Profile = ProfilePage;

  productoRef: any;
  productos: AngularFireList<any>;
  cotizaciones= new Array();

  constructor(public navCtrl: NavController, public LoginRegister: LoginRegisterProvider, public afDatabase: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.productoRef = afDatabase.list('productos');
    this.productos = this.productoRef.valueChanges();
    console.log(this.productoRef.valueChanges().clave);
  }

  cotizando(c: any) {
    if (this.cotizaciones.length == 0) {
      this.cotizaciones.push(c);
    } else {
      for (var i = 0; i < this.cotizaciones.length; i++) {
        if (this.cotizaciones[i] == c) {
          break;
        }
        if (i == this.cotizaciones.length - 1 && this.cotizaciones != c) {
          this.cotizaciones.push(c);
        }
      }
    }
  }

  push(p: any) {
    this.navCtrl.push(ShowproductPage, {productoEntrada: p});
  }

  pushCotizar() {
    this.navCtrl.push(CotizarPage, {productoEntrada: this.cotizaciones});
  }
}
