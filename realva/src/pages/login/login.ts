import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { LoginRegisterProvider } from "../../providers/login-register/login-register";
import { HomePage } from "../home/home";
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
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
	constructor(public navCtrl: NavController, public afDatabase: AngularFireDatabase, public navParams: NavParams, public http: Http, public loginRegister: LoginRegisterProvider, public alertCtrl: AlertController) {
		this.loginForm = new FormGroup({
			username: new FormControl('', Validators.required),
			password: new FormControl(),
		});
	}

	Loginpost() {
		if (this.loginRegister.userLogged != null) {
			this.loginForm.reset();
			this.navCtrl.setRoot(HomePage);
		} else {
			this.presentAlert("Error Inicio de Sesion", "Usuario o Contraseña incorrectos", "OK");
		}
	}
	Login(Data) {
		let clientesRef = this.afDatabase.list('clientes').valueChanges().subscribe((data) => {
			data.forEach(element => {
				let temp :any = element;
				if (temp.Correo == Data.username) {
					if (temp.Contraseña == Data.password) {
						this.loginRegister.userLogged = temp;
						console.log(temp);
					}
				}
			});
			this.Loginpost();
		});
		;
	}
	presentAlert(Title, SubTitle, Button) {
		let alert = this.alertCtrl.create({
			title: Title,
			subTitle: SubTitle,
			buttons: [Button]
		});
		alert.present();
	}
	login(data) {

    /*let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.loginError = error.message
			);*/
	}//login method

}//main brackets
