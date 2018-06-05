import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LoginRegisterProvider } from "../../providers/login-register/login-register";
import { HomePage } from "../home/home";
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

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
  page: HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loginRegister: LoginRegisterProvider, public alertCtrl: AlertController) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl(),
    });
  }
  Loginpost(Data) {
    if (this.loginRegister.Login(Data)) {
      this.loginForm.reset();
      this.navCtrl.pop();
    } else {
      this.presentAlert("Error Inicio de Sesion", "Usuario o Contraseña incorrectos", "OK");
    }
  }
  Login(Data) {
    let data = {
      email: Data.username,
      password: Data.password
    }
    let user_role = "";
    this.http.post('https://realva.000webhostapp.com/server/login.php', JSON.stringify(data)).map(res => res.json()).subscribe(res => {
      if (res != "") {
        if (res[0].user_role == "admin") {
          console.log(res[0].user_role == "admin");
          this.loginRegister.AdminAuth = true;
          this.loginForm.reset();
          this.navCtrl.pop();
        }
        if(res[0].user_role == "user"){
          this.loginRegister.ClientAuth = true;
          this.loginForm.reset();
          this.navCtrl.pop();
        }
      } else {
        this.presentAlert("Error Inicio de Sesion", "Usuario o Contraseña incorrectos", "OK");
      }
    });
    return false;
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
