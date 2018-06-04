import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LoginRegisterProvider } from "../../providers/login-register/login-register";

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginRegister: LoginRegisterProvider) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl(),
    });
  }
  clear(){
    this.loginForm.reset();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
