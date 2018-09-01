import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginRegisterProvider } from "../../providers/login-register/login-register";
import { LoginPage } from "../login/login";
import { RegisterPage } from "../register/register";
import { AdminPage } from "../admin/admin";
import { ProfilePage } from "../profile/profile"
import { ShowproductPage } from "../showproduct/showproduct";

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { CotizarPage } from "../cotizar/cotizar";


import { GlobalProvider } from '../../providers/global/global';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';

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
  cotizaciones = new Array();
  public filterList: Array<any>;
  public loadedfilterList: Array<any>;
  public filterRef: firebase.database.Reference;
  mostrarList = [];
  filt = [];
  constructor(public global: GlobalProvider, public navCtrl: NavController, public LoginRegister: LoginRegisterProvider, public afDatabase: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.filterRef = afDatabase.database.ref('productos');
    this.filterRef.on('value', productList => {
      let productos = [];
      productList.forEach(usuario => {
        productos.push(usuario.val());
        return false;
      });
      this.filterList = productos;
      console.log(this.filterList);
      this.loadedfilterList = productos;
      this.mostrarList = [];
    });

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
    let refpo = this.afDatabase.database.ref('productos');
    let update = this.afDatabase.list('productos');
    refpo.orderByChild('codigo').equalTo(p.codigo)
      .once('value').then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          update.update(childSnapshot.key, { visita: childSnapshot.val().visita + 1 });
        });
      });
    this.navCtrl.push(ShowproductPage, { productoEntrada: p });
  }
  initializeItems(): void {
    this.filterRef.on('value', productList => {
      let productos = [];
      productList.forEach(usuario => {
        productos.push(usuario.val());
        return false;
      });
      this.filterList = productos;
      this.loadedfilterList = productos;
    });
    this.filterList = this.loadedfilterList;
    this.mostrarList = [];
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
  getItemsCheck(searchbar) {
    var q = searchbar.target.value;
    // Reset items back to all of the items
    if (this.filt.length > 0 && !searchbar.target.checked) {
      let borrar = this.filt.findIndex(k => k == q);
      this.filt.splice(borrar, 1);
    }
    this.initializeItems();
    // if the value is an empty string don't filter the items
    if (this.filt.length == 0) {
      if (!q || !searchbar.target.checked) {
        return;
      }
    }
    if (searchbar.target.checked) {
      this.filt.push(q);
    }
    for (const iterator of this.filt) {
      this.filterList.filter((v) => {
        if (v.especie && this.filt.length > 0) {
          if (v.especie.indexOf(iterator.toUpperCase())> -1) {
            if(this.mostrarList.indexOf(v) == -1){
              this.mostrarList.push(v);
            }
            return true;
          }
          return false;
        }
      });
    }
    this.filterList = this.mostrarList;
  }
}
