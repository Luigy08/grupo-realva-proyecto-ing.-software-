import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
import {AdminPage} from "../admin/admin";
/**
 * Generated class for the DownloadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-downloads',
  templateUrl: 'downloads.html',
})
export class DownloadsPage {
  login = LoginPage;
  register = RegisterPage;
  Admin = AdminPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public LoginRegister: LoginRegisterProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadsPage');
  }

}
