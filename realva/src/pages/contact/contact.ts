import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  Data: any = {};
  contactForm: FormGroup;
  username: AbstractControl;
  email: AbstractControl;
  message: AbstractControl;

  constructor(public http: Http, nav: NavController, public actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController) {
    this.http = http;
    this.contactForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl(),
      message: new FormControl
    });
  }
  post() {
    if (this.contactForm.valid) {
      if (this.http.post("api/form/d34b479b-974b-53dd-9737-94d59ea03275/form-response", this.Data).subscribe() != null) {
        this.contactForm.reset();
        this.presentAlert("Mensaje Enviado", "Su mensaje ha sido enviado con éxito!", "Ok");
      }
    } else {
      this.presentAlert("Error", "Ingrese todos sus datos de manera correcta!", "Ok");
    }
  }

  presentAlert(Title, SubTitle, Button) {
    let alert = this.alertCtrl.create({
      title: Title,
      subTitle: SubTitle,
      buttons: [Button]
    });
    alert.present();
  }

  public onKeyUp(event: any) {

    let newValue = event.target.value;

    let regExp = new RegExp('^[A-Za,a-z ]+$');

    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }
  }
}

