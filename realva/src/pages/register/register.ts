import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, } from '@angular/forms';
import { LoginRegisterProvider } from "../../providers/login-register/login-register";
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

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
  telephone2: AbstractControl;
  RTN: AbstractControl;
  password: AbstractControl;
  Repassword: AbstractControl;
  my_variable: string = '#bfbcbc';
  passwordcheck: string;
  passwordcheck1: string;
  registroExitoso= false;

  constructor(public navCtrl: NavController,private alertCtrl: AlertController,public afDatabase: AngularFireDatabase, public navParams: NavParams, public LoginRegister: LoginRegisterProvider) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.nullValidator, Validators.minLength(10)]), 
      userlastname: new FormControl('', [Validators.required, Validators.nullValidator, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.nullValidator, Validators.email]),
      direction: new FormControl(),
      telephone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.nullValidator]),
      telephone2: new FormControl('', [Validators.required, Validators.minLength(8), Validators.nullValidator]),
      RTN: new FormControl('', [Validators.required, Validators.minLength(14)]),
      password: new FormControl('', [Validators.required, Validators.nullValidator]),
      Repassword: new FormControl('', [Validators.required, Validators.nullValidator]),
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  Register(Data,estado) {
    console.log(Data);
    let clientesRef = this.afDatabase.list('clientes').push({});
    clientesRef.set({id:clientesRef.key,ClaveCliente:0,NombreEmpresa:Data.username,NombreRepresentante:Data.userlastname,RTN:Data.RTN,Estatus:estado,Telefono1:Data.telephone,Telefono2:Data.telephone2,Contraseña:Data.password,Clasificacion:0,Saldo:0,Direccion:Data.direction,Correo:Data.email});
    this.presentAlert("Registro Exitoso", "Se logro registrar con exito", "OK");
    this.registroExitoso=true;
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
    } else if (this.passwordcheck1 != "") {
      this.my_variable = '#bfbcbc';
    } else {
      this.my_variable = "red";
    }

  }

  public checkPassWord1(event) {
    this.passwordcheck1 = event.target.value;
    if (this.passwordcheck == this.passwordcheck1 && this.passwordcheck != "" && this.passwordcheck1 != "") {
      this.my_variable = "green";
    } else if (this.passwordcheck1 != "") {
      this.my_variable = '#bfbcbc';
    }
    else {
      this.my_variable = "red";
    }

  }

  FullRegister(Data) {
    this.Register(Data,0);
    if(this.registroExitoso){
      this.registerForm.reset();
      this.registroExitoso = false; 
    }
  }
}
