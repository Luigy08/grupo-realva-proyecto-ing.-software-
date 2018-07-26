import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public LoginRegister: LoginRegisterProvider) {
    this.producto= navParams.get('productoEntrada');
    console.log(this.producto.price);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowproductPage');
  }

}
