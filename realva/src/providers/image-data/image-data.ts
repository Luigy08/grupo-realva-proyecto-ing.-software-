import { AngularFireDatabase } from 'angularfire2/database';
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
  file: string;
  fileurl: Observable<string>;
  constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage, private alertCtrl: AlertController, private toastCtrl: ToastController) { }

  getFiles() {
    let ref = this.db.list('files');

    return ref.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  addFile(File) {
    this.uploadInformation(File);
  }
  uploadToStorage(information): AngularFireUploadTask {
    let newName = `${new Date().getTime()}.png`;
    this.file = `${new Date().getTime()}.png`;
    console.log(this.file);
    return this.afStorage.ref('files/' + this.file).put(information);
  }

  storeInfoToDatabase() {
    let img: any;
    img = this.afStorage.ref(`files/${this.file}`).getDownloadURL;
    console.log(img);
  }
  deleteFile(file) {
    let key = file.key;
    let storagePath = file.fullPath;
    let ref = this.db.list('files');
    ref.remove(key);
    return this.afStorage.ref(storagePath).delete();
  }
  uploadInformation(text) {
    let upload = this.uploadToStorage(text);
    let img: any;
    this.fileurl=this.afStorage.ref(`files/${this.file}`).getDownloadURL();
    console.log(this.fileurl);
    // Perhaps this syntax might change, it's no error here!

  }
}
