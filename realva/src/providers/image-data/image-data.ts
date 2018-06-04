import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
/*
  Generated class for the ImageDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageDataProvider {
  files: Observable<any[]>;
  file: string = "hola.png";
  constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage, private alertCtrl: AlertController, private toastCtrl: ToastController) { }

  getFiles() {
    let ref = this.db.list('files');

    return ref.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  addFile(File) {
    this.uploadToStorage(File);
  }
  uploadToStorage(information) {
    firebase.storage().ref(this.file).put(information);
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
}
