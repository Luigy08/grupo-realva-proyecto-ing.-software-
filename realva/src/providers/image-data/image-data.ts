import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the ImageDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageDataProvider {
  files: Observable<any[]>;
  file: string = "hola.png";
  constructor( private alertCtrl: AlertController, private toastCtrl: ToastController) { }


}
