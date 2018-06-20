import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LoginRegisterProvider } from "../../providers/login-register/login-register";
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';


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
  Contravalnull: boolean = false;
  registerForm: FormGroup;
  
  my_variable: string = '#bfbcbc';
  passwordcheck: string;
  passwordcheck1: string;
  signupError: string;
	form: FormGroup;
  constructor(fb: FormBuilder, private navCtrl: NavController, private auth: AuthService) {
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      address: new FormControl(''),
      keyClient: new FormControl('')
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
    let regExp = new RegExp('^[0-9, +()-]+$');
    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
  }
  public onKeyUpRTN(event: any) {
    let newValue = event.target.value;
    let regExp = new RegExp('^[0-9, -]+$');
    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
  }
  public checkPassWord(event) {
    this.passwordcheck = event.target.value;
    if (this.passwordcheck == this.passwordcheck1 && this.passwordcheck != "" && this.passwordcheck1 != "") {
      this.my_variable = "green";
    } else if (this.passwordcheck1 == "") {
      this.my_variable = '#bfbcbc';
    } else {
      this.my_variable = "red";
    }
  }
  public checkPassWord1(event) {
    this.passwordcheck1 = event.target.value;
    if (this.passwordcheck == this.passwordcheck1 && this.passwordcheck != "" && this.passwordcheck1 != "") {
      this.my_variable = "green";
    } else if (this.passwordcheck1 == "") {
      this.my_variable = '#bfbcbc';
    }
    else {
      this.my_variable = "red";
    }
  }
  Register() {
    let data = this.form.value;
		let credentials = {
			email: data.email,
      password: data.password,
      address: data.address
    };
    console.log(credentials.address);
		this.auth.signUp(credentials).then(
			() => this.navCtrl.setRoot(HomePage),
			error => this.signupError = error.message
    );

  }
}
