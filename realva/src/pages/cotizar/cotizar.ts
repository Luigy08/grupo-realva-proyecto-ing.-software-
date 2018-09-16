import { Component } from '@angular/core';
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
import { NavParams,NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import {GlobalProvider} from '../../providers/global/global';
import { FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
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
    for (let i=0; i< global.cotizaciones.length; i++) {
      this.total += global.cotizaciones[i].precio*global.cotizaciones[i].cantidad
    }
  }
  calcularTotal (item, valor) {
    let cantidad = valor.target.value;
    let temporal =0;
    for (let i=0; i< this.global.cotizaciones.length; i++) {
      if (item.nombre == this.global.cotizaciones[i].nombre && item.precio == this.global.cotizaciones[i].precio) {
        this.global.cotizaciones[i].cantidad = cantidad;
      }
      temporal += this.global.cotizaciones[i].precio*this.global.cotizaciones[i].cantidad
    }
    this.total = temporal;
  }
  post() {
    if (this.contactForm.valid) {
      const totalSalida = this.total;
      const salida = {...this.Data, ...this.productos, totalSalida}
      if (this.http.post("api/form/d34b479b-974b-53dd-9737-94d59ea03275/form-response", salida).subscribe() != null) {
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
    let temporal =0;
    for (let i=0; i< this.global.cotizaciones.length; i++) {
      temporal += this.global.cotizaciones[i].precio*this.global.cotizaciones[i].cantidad
    }
    this.total = temporal;
  }
  limpiar() {
    for(let i=0; i<=this.global.cotizaciones.length; i++) {
      this.global.cotizaciones.splice(i, 1);
    }
    this.global.cotizaciones.splice(0, 1);
    this.total = 0;
  }

}
