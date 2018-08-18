import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CotizarPage} from "../cotizar/cotizar";
import {GlobalProvider} from '../../providers/global/global';
import { HttpModule } from '@angular/http';
import{ HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
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
  constructor(public global: GlobalProvider ,public navCtrl: NavController, public navParams: NavParams) {
    this.producto= navParams.get('productoEntrada');
    console.log(this.producto.price);
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
}
