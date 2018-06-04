import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  imageUrl: string = "";
  selectedFile: File;
  url: any;
  AdminScreenIndex: number;
  prueba: any = "Texto";
  clients: any;
  clientsfixed: any;
  clientsRTN: any;
  clientsTelephone: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.chargeClients();
  }
  chargeClients() {
    this.http.get('http://localhost/get_client.php').map(res => res.json()).subscribe(data => {
      this.clients = data, err => {
        console.log("Oops!");
      };
    });
    this.http.get('http://localhost/get_client_rtn.php').map(res => res.json()).subscribe(data => {
      this.clientsRTN = data, err => {
        console.log("Oops!");
      };
    });
    this.http.get('http://localhost/get_client_phone.php').map(res => res.json()).subscribe(data => {
      this.clientsTelephone = data, err => {
        console.log("Oops!");
      };
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  loadimage() {

  }
  handleFileInput(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  onUpload() {
    // upload code goes here
  }
  DeleteImageCarrOfer(ImageId) {

  }
  DeleteImageCarrMain(ImageId) {

  }
}
