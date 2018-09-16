import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GlobalProvider} from '../../providers/global/global';
import {LoginRegisterProvider} from "../../providers/login-register/login-register";

/**
 * Generated class for the ShowproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showproduct',
  templateUrl: 'showproduct.html',
})
export class ShowproductPage {
  producto: any;
  cantidad: any;
  presentacion: any;
  constructor(public LoginRegister: LoginRegisterProvider, public global: GlobalProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.producto= navParams.get('productoEntrada');
    console.log(this.producto.price);
    this.presentacion= this.producto.presentacion[0];
  }
  dosisPrecio(dosis) {
    this.presentacion = dosis;
  }
  cotizando(c) {
    const a = {...c, ...this.presentacion }
    if (this.global.cotizaciones.length == 0) {
      this.global.cotizaciones.push(a);
    } else {
      for (let i = 0; i < this.global.cotizaciones.length; i++) {
        if (this.global.cotizaciones[i].precio == a.precio) {
          break;
        }
        if (i === this.global.cotizaciones.length - 1 && this.global.cotizaciones[i].precio !== a.precio) {
          this.global.cotizaciones.push(a);
        }
      }
    }
  }

}
