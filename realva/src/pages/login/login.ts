import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LoginRegisterProvider } from "../../providers/login-register/login-register";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  Data: any = {};
  loginForm: FormGroup;
  username: AbstractControl;
  email: AbstractControl;
  page:HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginRegister: LoginRegisterProvider,public alertCtrl:AlertController) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl(),
    });
  }
  Login(Data){    
    if(this.loginRegister.Login(Data)){
      this.loginForm.reset();
      this.navCtrl.pop();
    }else{
      this.presentAlert("Error Inicio de Sesion","Usuario o Contraseña incorrectos","OK");
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
