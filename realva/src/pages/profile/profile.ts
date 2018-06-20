import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public afDatabase: AngularFireDatabase) {
    this.clientesref = afDatabase.list('clientes');
    this.clientes = this.clientesref.valueChanges();
  }

  ionViewDidLoad() {
    this.cargarClientes();
    console.log('ionViewDidLoad ProfilePage');
  }
  cargarClientes() {
    let user: any;    
    this.afDatabase.database.ref('clientes').on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          if( childSnapshot.val().ClaveCliente === 1){
            user=childSnapshot.val();
          }
            
        });
        console.log(user);        
    });    
  }
  
  eliminarClientes(){
    var mensaje = confirm("¿Seguro que desea Eliminar su cuenta?");
    if (mensaje) {
      this.clientesref.remove("-LFJn0JZV8-eMDHRJ2cZ");
      this.navCtrl.pop();  
      }    
  }
  
}
