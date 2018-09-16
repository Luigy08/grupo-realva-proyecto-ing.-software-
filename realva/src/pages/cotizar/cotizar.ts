import { Component } from '@angular/core';
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
import { NavParams,NavController, ActionSheetController, AlertController } from 'ionic-angular';
import {ShowproductPage} from "../showproduct/showproduct";
import { Http } from '@angular/http';
import {GlobalProvider} from '../../providers/global/global';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {AdminPage} from "../admin/admin";
import {ProfilePage} from "../profile/profile"

@Component({
  selector: 'page-cotizar',
  templateUrl: 'cotizar.html'
})

export class CotizarPage {
  Data: any = {};
  contactForm: FormGroup;
  username: AbstractControl;
  email: AbstractControl;
  message: AbstractControl;
  login = LoginPage;
  register = RegisterPage;
  Admin = AdminPage;
  Profile = ProfilePage;
  total = 0;
  productos= this.global.cotizaciones;
  constructor(private alertCtrl: AlertController, public http: Http ,public global: GlobalProvider ,public navCtrl: NavController ,public LoginRegister: LoginRegisterProvider,public navParams: NavParams) {
    this.http = http;
    this.contactForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl(),
      message: new FormControl
    });
  }
  post() {
    if (this.contactForm.valid) {
      if (this.http.post("api/form/d34b479b-974b-53dd-9737-94d59ea03275/form-response", this.Data).subscribe() != null) {
        this.contactForm.reset();
        this.presentAlert("Mensaje Enviado", "Su mensaje ha sido enviado con éxito!", "Ok");
      }
    } else {
      this.presentAlert("Error", "Ingrese todos sus datos de manera correcta!", "Ok");
    }
  }
  presentAlert(Title, SubTitle, Button) {
    let alert = this.alertCtrl.create({
      title: Title,
      subTitle: SubTitle,
      buttons: [Button]
    });
    alert.present();
  }

  public onKeyUp(event: any) {

    let newValue = event.target.value;

    let regExp = new RegExp('^[A-ZaÑñÁÉÍÓÚáéíóú,a-z, ]+$');

    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
  }
  eliminar(p) {
    const index = this.global.cotizaciones.indexOf(p);
    if (index>-1) {
      this.global.cotizaciones.splice(index, 1);
    }
  }
  limpiar() {
    for(let i=0; i<=this.global.cotizaciones.length; i++) {
      this.global.cotizaciones.splice(i, 1);
    }
    this.global.cotizaciones.splice(0, 1);

  }

}
