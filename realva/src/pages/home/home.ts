import { Component } from '@angular/core';
import { NavController, Nav, AlertController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
import {AdminPage} from "../admin/admin";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import { MyApp } from '../../app/app.component';
import {AuthService} from "../../services/auth.service";
import {ShowproductPage} from "../showproduct/showproduct";
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

  productosRef: any;
  productos: AngularFireList<any>;
  constructor(private alertCtrl:AlertController,public navCtrl: NavController ,public LoginRegister: LoginRegisterProvider,public auth:AuthService,public afDatabase: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.ofertaRef= afDatabase.list('imagenesPrincipal');
    this.ofertas = this.ofertaRef.valueChanges();
    this.logoRef= afDatabase.list('imagenesOfertas');
    this.logos= this.logoRef.valueChanges();
    this.productosRef= afDatabase.list('productos',ref => ref.orderByChild('visita').limitToLast(4));
    this.productos= this.productosRef.valueChanges();
    console.log(this.productos);
  }
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(0, 15000);
  }

  next(){
    this.slides.slideNext();
  }

  prev(){
    this.slides.slidePrev();
  }

  push(p: any) {
    let refpo = this.afDatabase.database.ref('productos');
    let update = this.afDatabase.list('productos');
    refpo.orderByChild('codigo').equalTo(p.codigo)
            .once('value').then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                  update.update(childSnapshot.key,{visita:childSnapshot.val().visita +1});
            });
        });
    this.navCtrl.push(ShowproductPage, {productoEntrada: p});
  }
}
