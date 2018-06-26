import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
import {ShowproductPage} from "../showproduct/showproduct";


@Component({
  selector: 'page-cotizar',
  templateUrl: 'cotizar.html'
})
export class CotizarPage {
productos: [any];

  constructor(public navCtrl: NavController ,public LoginRegister: LoginRegisterProvider,public navParams: NavParams) {
    this.productos= navParams.get('productoEntrada');
  }


}
