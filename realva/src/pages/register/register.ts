import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, } from '@angular/forms';
import { LoginRegisterProvider } from "../../providers/login-register/login-register";
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { CryptoJS } from 'crypto-js'
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';

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
  registroExitoso = false;
  clavesRef: any = [];
  descargaRef: any;
  Activacion = 'Inactivo';

  passnumvall = false;
  passcapvall = false;
  passlowvall = false;
  passminvall = false;
  hasenter = false;
  passunequal = false;


  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public afDatabase: AngularFireDatabase, public navParams: NavParams, public LoginRegister: LoginRegisterProvider) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.nullValidator, Validators.minLength(2)]),
      userlastname: new FormControl('', [Validators.required, Validators.nullValidator, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.nullValidator, Validators.email]),
      direction: new FormControl(),
      telephone: new FormControl('', [Validators.required, Validators.minLength(15),Validators.maxLength(15)]),
      telephone2: new FormControl('', [Validators.required, Validators.minLength(15),Validators.maxLength(15)]),
      RTN: new FormControl('', [Validators.required, Validators.minLength(16)]),
      password: new FormControl('', [Validators.required, Validators.nullValidator]),
      Repassword: new FormControl('', [Validators.required, Validators.nullValidator]),
    });
    this.descargaRef = afDatabase.list('clavesAntiguas');
    this.descargaRef.valueChanges().subscribe((datas) => { this.clavesRef = datas; }, (err) => { console.log("probleme : ", err) });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.showConfirm();
  }

  Register(Data, estado) {
    console.log(Data);
    const hmacDigest = Base64.stringify(hmacSHA512(Data.password, '9871236342'));
    let clientesRef = this.afDatabase.list('clientes').push({});
    clientesRef.set({ id: clientesRef.key, ClaveCliente: 0, NombreEmpresa: Data.username, NombreRepresentante: Data.userlastname, RTN: Data.RTN, Estatus: estado, Telefono1: Data.telephone, Telefono2: Data.telephone2, Contraseña: hmacDigest, Clasificacion: 0, Direccion: Data.direction, Correo: Data.email });
    this.registroExitoso = true;
    this.presentAlert("Registro Exitoso", "Se logro registrar con exito", "OK");
  }
  presentAlert(Title, SubTitle, Button) {
    let alert = this.alertCtrl.create({
      title: Title,
      subTitle: SubTitle,
      buttons: [Button]
    });
    alert.present();
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Registrarse',
      message: 'Es cliente nuevo o existente',
      buttons: [
        {
          text: 'Nuevo',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Existente',
          handler: () => {
            this.showPrompt();
          }
        }
      ]
    });
    confirm.present();
  }
  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Buscar Cliente Existente',
      message: "Ingrese su Clave de Cliente",
      inputs: [
        {
          name: 'Clave',
          placeholder: 'Clave'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.buscarCliente(data.Clave);
          }
        }
      ]
    });
    prompt.present();
  }
  buscarCliente(Clave) {
    let existe = false;
    for (const iterator of this.clavesRef) {
      if (Clave == iterator.Clave) {
        existe = true;
      }
    }
    if (existe) {
      this.presentAlert("Registre Sus Datos", "Su cuenta sera activada de forma automatica", "OK");
      this.Activacion = 'Activo';
    } else {
      this.presentAlert("No se encontro su cliente", "Su Clave no existe, cree una nueva cuenta o intente de nuevo", "OK");
      this.Activacion = 'InActivo';
    }
  }
  public onKeyUp(event: any) {
    let newValue = event.target.value;
    let regExp = new RegExp('^[0-9A-ZaÑñÁÉÍÓÚáéíóú,a-z, ]+$');
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
    this.passnumvall = false;
    this.passcapvall = false;
    this.passlowvall = false;
    this.passunequal = false;
    this.passminvall = false;
    this.hasenter = true;
    let passvalid = false;
    //this.Register(Data,this.Activacion);
    console.log(this.registerForm);
    if (this.registerForm.get('password').value) {
      var containsDigits = /[0-9]/.test(this.registerForm.get('password').value)
      var containsUpper = /[A-Z]/.test(this.registerForm.get('password').value)
      var containsLower = /[a-z]/.test(this.registerForm.get('password').value)
      if (!containsDigits) {
        this.passnumvall = true;
      }
      if (!containsUpper) {
        this.passcapvall = true;
      }
      if (!containsLower) {
        this.passlowvall = true;
      }
      if (this.registerForm.get('password').value.length < 8) {
        this.passminvall = true;
      }
      if (this.registerForm.get('password').value != this.registerForm.get('Repassword').value && this.registerForm.get('Repassword').value) {
        this.passunequal = true;
      }
      if(!this.passnumvall && !this.passlowvall && !this.passcapvall && !this.passunequal && !this.passminvall){
        passvalid = true;
      }
    }
    if(this.registerForm.valid && passvalid){
      this.Register(Data,this.Activacion);
      if (this.registroExitoso) {
        this.hasenter = false;
        this.registerForm.reset();
        this.registroExitoso = false;
        this.navCtrl.pop();
      }
    }
  }
}
