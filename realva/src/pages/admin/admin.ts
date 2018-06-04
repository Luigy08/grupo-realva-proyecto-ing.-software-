import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import {ImageDataProvider} from "../../providers/image-data/image-data";
import 'rxjs/add/operator/map';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
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
  imageUrl2: string = "";
  selectedFile: File;
  selectedFile2: File;
  url: any;
  AdminScreenIndex: number;
  prueba: any = "Texto";
  clients: any;
  clientsfixed: any;
  clientsRTN: any;
  clientsTelephone: any;
  file: string = "hola.png";
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public image : ImageDataProvider) {
    this.chargeClients();
  }
  chargeClients() {
    this.http.get('https://realva.000webhostapp.com/get_client.php').map(res => res.json()).subscribe(data => {
      this.clients = data, err => {
        console.log("Oops!");
      };
    });
    this.http.get('https://realva.000webhostapp.com/get_client_rtn.php').map(res => res.json()).subscribe(data => {
      this.clientsRTN = data, err => {
        console.log("Oops!");
      };
    });
    this.http.get('https://realva.000webhostapp.com/get_client_phone.php').map(res => res.json()).subscribe(data => {
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
  handleFileInput2(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }
  protected getFileUrl(): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      firebase.storage().ref(this.file).getDownloadURL().then((downloadUrl: string) => {
        console.log('Your download url is: ', downloadUrl);
        return resolve(downloadUrl);
      }).catch((error: any) => {
        console.error('something went wrong while fetching the download url', error);
        return reject(error);
      });
    });
  }
  protected uploadFile(information): Promise<any> {
    try {
      return new Promise((resolve: any, reject: any) => {
        firebase.storage().ref(this.file).put(information).then(() => {
          console.log('successfully uploaded Your file');
          return resolve();
        }).catch((error: any) => {
          return reject(error);
        });
      });
    } catch (event) { }
  }
  onUpload() {
    // upload code goes here
  }
  DeleteImageCarrOfer(ImageId) {

  }
  DeleteImageCarrMain(ImageId) {

  }
}
