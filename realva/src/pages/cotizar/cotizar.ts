import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
import {ShowproductPage} from "../showproduct/showproduct";


@Component({
  selector: 'page-cotizar',
  templateUrl: 'cotizar.html'
})
export class CotizarPage {


  constructor(public navCtrl: NavController ,public LoginRegister: LoginRegisterProvider) {

  }

  push(p: any){
    this.navCtrl.push(ShowproductPage,{productoEntrada: p});
  }
  pushCotizar(p: any){
    this.navCtrl.push(CotizarPage,{productoEntrada: p});
  }
}
