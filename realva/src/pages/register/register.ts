import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LoginRegisterProvider } from "../../providers/login-register/login-register";
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

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
  username: AbstractControl;
  userlastname: AbstractControl;
  email: AbstractControl;
  direction: AbstractControl;
  telephone: AbstractControl;
  RTN: AbstractControl;
  password: AbstractControl;
  Repassword: AbstractControl;
  my_variable: string = '#bfbcbc';
  passwordcheck: string;
  passwordcheck1: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public LoginRegister: LoginRegisterProvider, public http: Http) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.nullValidator, Validators.minLength(10)]),
      userlastname: new FormControl('', [Validators.required, Validators.nullValidator, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.nullValidator, Validators.email]),
      direction: new FormControl(),
      telephone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.nullValidator]),
      RTN: new FormControl('', [Validators.required, Validators.minLength(14)]),
      password: new FormControl('', [Validators.required, Validators.nullValidator]),
      Repassword: new FormControl('', [Validators.required, Validators.nullValidator]),
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
  Register(Data) {
    console.log(Data);
    let ident: number;
    let subir = { name: Data.username, last_name: Data.userlastname, status: 1, clase: 0, rtn: Data.RTN, phone: Data.telephone, email: Data.email, password: Data.password };
    this.http.post('https://realva.000webhostapp.com/server/register.php', JSON.stringify(subir)).map(res => res.json()).subscribe(res => {
      if (res != "") {
        /*console.log(res);*/
        ident = res;
        let subir2 = { phone: Data.telephone, id: res };
        this.http.post('https://realva.000webhostapp.com/server/register_phone.php', JSON.stringify(subir2)).subscribe(res => {
        });
        let subir1 = { rtn: Data.RTN, id: res };
        this.http.post('https://realva.000webhostapp.com/server/register_rtn.php', JSON.stringify(subir1)).subscribe(res => {
        });
        let subir3 = { email: Data.email, password: Data.password, id: ident };
        this.http.post('https://realva.000webhostapp.com/server/register_user.php', JSON.stringify(subir3)).subscribe(res => {
        });
        this.registerForm.reset();
        this.navCtrl.pop();
      }
    });

  }
}
