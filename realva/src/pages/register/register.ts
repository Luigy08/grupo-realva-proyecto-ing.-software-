import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import {LoginRegisterProvider} from "../../providers/login-register/login-register";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  Data: any = {};
  registerForm: FormGroup;
  username:AbstractControl;
  email:AbstractControl;
  direction:AbstractControl;
  telephone:AbstractControl;
  RTN:AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams,public LoginRegister:LoginRegisterProvider) {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl(),
      direction: new FormControl(),
      telephone:new FormControl('', Validators.required),
      RTN:new FormControl('', Validators.required)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  public onKeyUp(event: any) {
    let newValue = event.target.value;
    let regExp = new RegExp('^[A-ZaÑñÁÉÍÓÚáéíóú,a-z, ]+$');
    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
  }
  public onKeyUpNum(event: any) {
    let newValue = event.target.value;
    let regExp = new RegExp('^[0-9, ]+$');
    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
  }
}
