import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public LoginRegister: LoginRegisterProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadsPage');
  }

}
