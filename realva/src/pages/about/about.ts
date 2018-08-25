import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {AdminPage} from "../admin/admin";
import {ProfilePage} from "../profile/profile";
import * as $ from 'jquery';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  login = LoginPage;
  register = RegisterPage;
  Admin = AdminPage;
  Profile = ProfilePage;
  pet: string = "mision";
  constructor(public navCtrl: NavController,public LoginRegister: LoginRegisterProvider) {

  }

}
