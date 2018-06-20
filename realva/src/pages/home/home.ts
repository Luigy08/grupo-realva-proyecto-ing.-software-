import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
import {AdminPage} from "../admin/admin";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import { MyApp } from '../../app/app.component';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  login = LoginPage;
  register = RegisterPage;
  Admin = AdminPage;
  Profile = ProfilePage;

  constructor(public navCtrl: NavController,public LoginRegister: LoginRegisterProvider, public auth:AuthService, public mapp:MyApp) {

  }
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(0, 15000);
  }
  
}
