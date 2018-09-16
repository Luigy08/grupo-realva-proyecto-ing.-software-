import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { LoginRegisterProvider } from '../../providers/login-register/login-register';
import { HomePage } from '../home/home';
import firebase from 'firebase';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, } from '@angular/forms';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: any;
  clientes: AngularFireList<any>;
  clientesref: any;
  Data: any = {};
  profileForm: FormGroup;
  username: AbstractControl;
  userlastname: AbstractControl;
  email: AbstractControl;
  direction: AbstractControl;
  telephone: AbstractControl;
  telephone2: AbstractControl;
  RTN: AbstractControl;

  hasenter = false;


  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public afDatabase: AngularFireDatabase, public LoginRegister: LoginRegisterProvider) {
    this.clientesref = afDatabase.list('clientes');
    this.user = this.LoginRegister.userLogged;
    this.profileForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.nullValidator, Validators.minLength(2)]),
      userlastname: new FormControl('', [Validators.required, Validators.nullValidator, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.nullValidator, Validators.email]),
      direction: new FormControl(),
      telephone: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]),
      telephone2: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]),
      RTN: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  modificar(Data) {
    var newupdates = {};
    var updates = {};
    var temp = 0;
    console.log(Data);
    if (Data.username != undefined) {
      if (this.profileForm.get('username').valid) {
        temp++;
        updates['/clientes/' + this.user.id + '/NombreEmpresa'] = Data.username;
        this.user.NombreEmpresa = Data.username;
      }
    }
    if (Data.userlastname != undefined) {
      if (this.profileForm.get('userlastname').valid) {
        temp++;
        updates['/clientes/' + this.user.id + '/NombreRepresentante'] = Data.userlastname;
        this.user.NombreRepresentante = Data.userlastname;
      }
    }
    if (Data.email != undefined) {
      if (this.profileForm.get('email').valid) {
        temp++;
        updates['/clientes/' + this.user.id + '/Correo'] = Data.email;
        this.user.Correo = Data.email;
      }
    }
    if (Data.direction != undefined) {
      if (this.profileForm.get('direction').valid) {
        temp++;
        updates['/clientes/' + this.user.id + '/Direccion'] = Data.direction;
        this.user.Direccion = Data.direction;
      }
    }
    if (Data.telephone != undefined) {
      if (this.profileForm.get('telephone').valid) {
        temp++;
        updates['/clientes/' + this.user.id + '/Telefono1'] = Data.telephone;
        this.user.Telefono1 = Data.telephone;
      }
    }
    if (Data.telephone2 != undefined) {
      if (this.profileForm.get('telephone2').valid) {
        temp++;
        updates['/clientes/' + this.user.id + '/Telefono2'] = Data.telephone2;
        this.user.Telefono2 = Data.telephone2;
      }
    }
    if (Data.RTN != undefined) {
      if (this.profileForm.get('RTN').valid) {
        temp++;
        updates['/clientes/' + this.user.id + '/RTN'] = Data.RTN;
        this.user.RTN = Data.RTN;
      }
    }
    if (temp > 0) {
      firebase.database().ref().update(updates);
      this.presentAlert("Modificacion Exitosa", "Se logro modificar con exito", "OK");
      this.hasenter = false;
    }else{
      this.presentAlert("Error Al Modificar", "No Se logro modificar", "OK");
    }
  }
  presentConfirm(Data) {
    let alert = this.alertCtrl.create({
      title: 'Confirmar Modificacion',
      message: 'Desea realizar modificacion?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.ValidateModify(Data);
          }
        }
      ]
    });
    alert.present();
  }
  presentAlert(Title, SubTitle, Button) {
    let alert = this.alertCtrl.create({
      title: Title,
      subTitle: SubTitle,
      buttons: [Button]
    });
    alert.present();
  }
  eliminarClientes() {
    var mensaje = confirm("¿Seguro que desea Eliminar su cuenta?");
    if (mensaje) {
      this.navCtrl.pop();
      let temp = this.LoginRegister.userLogged.id;
      this.LoginRegister.LogOut();
      this.clientesref.remove(temp);
    }
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
  ValidateModify(Data) {
    this.hasenter = true;
    console.log(this.profileForm);
    this.modificar(Data);
  }
}
