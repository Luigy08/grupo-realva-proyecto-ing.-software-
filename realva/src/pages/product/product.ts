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

import {GlobalProvider} from '../../providers/global/global';


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

  constructor(public global: GlobalProvider ,public navCtrl: NavController, public LoginRegister: LoginRegisterProvider, public afDatabase: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.productoRef = afDatabase.list('productos');
    this.productos = this.productoRef.valueChanges();

  }

  cotizando(c) {
    if (this.global.cotizaciones.length == 0) {
      this.global.cotizaciones.push(c);
    } else {
      for (var i = 0; i < this.global.cotizaciones.length; i++) {
        if (this.global.cotizaciones[i] == c) {
          break;
        }
        if (i == this.global.cotizaciones.length - 1 && this.global.cotizaciones != c) {
          this.global.cotizaciones.push(c);
        }
      }
    }
  }

  push(p: any) {
    this.navCtrl.push(ShowproductPage, {productoEntrada: p});
  }

  highlightMe(information){
    
    if(information == 1){
      if(document.getElementById("test").className.indexOf("collapsed") != -1){
        document.getElementById("test").className = "active";
        //document.getElementById("ut").className = "";
        //document.getElementById("lab").className = "";
      } else {
        document.getElementById("test").className = "";
      }  
      
    }
    

    if(information == 2){
      if(document.getElementById("ut").className.indexOf("collapsed") != -1){
        //document.getElementById("test").className = "";
        document.getElementById("ut").className = "active";
        //document.getElementById("lab").className = "";
      } else {
        document.getElementById("ut").className = "";
      }
    }

    if(information == 3){
      if(document.getElementById("lab").className.indexOf("collapsed") != -1){
        //document.getElementById("test").className = "";
        //document.getElementById("ut").className = "";
        document.getElementById("lab").className = "active";
      } else {
        document.getElementById("lab").className = "";
      }
    }
  }
}
