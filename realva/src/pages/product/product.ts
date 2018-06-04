import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  constructor(public navCtrl: NavController ,public LoginRegister: LoginRegisterProvider) {

  }

}
