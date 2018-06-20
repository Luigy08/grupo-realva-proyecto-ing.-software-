import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
import {AdminPage} from "../admin/admin";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {ProfilePage} from "../profile/profile"

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  login = LoginPage;
  register = RegisterPage;
  Admin = AdminPage;
  Profile = ProfilePage;

  ofertaRef: any;
  ofertas: AngularFireList<any>;

  logoRef: any;
  logos: AngularFireList<any>;
  constructor(public navCtrl: NavController ,public LoginRegister: LoginRegisterProvider,public afDatabase: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.ofertaRef= afDatabase.list('imagenesPrincipal');
    this.ofertas = this.ofertaRef.valueChanges();
    this.logoRef= afDatabase.list('imagenesOfertas');
    this.logos= this.logoRef.valueChanges();

  }
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(0, 15000);
  }

}
