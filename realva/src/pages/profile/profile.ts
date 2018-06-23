import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { LoginRegisterProvider } from '../../providers/login-register/login-register';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public afDatabase: AngularFireDatabase,public LoginRegister:LoginRegisterProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  
  eliminarClientes(){
    var mensaje = confirm("¿Seguro que desea Eliminar su cuenta?");
    if (mensaje) {
      this.clientesref.remove("-LFJn0JZV8-eMDHRJ2cZ");
      this.navCtrl.pop();  
      }    
  }
  
}
