import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  Data: any = {};

  constructor(public http: Http, nav: NavController, public actionSheetCtrl: ActionSheetController) {
    this.http = http;
  }
  post() {
    this.http.post("api/form/d34b479b-974b-53dd-9737-94d59ea03275/form-response", this.Data).subscribe();

    }

  }

