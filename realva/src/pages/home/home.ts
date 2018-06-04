import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  login = LoginPage;
  constructor(public navCtrl: NavController) {
    

  }
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(1, 15000);
    this.slides.slideTo(2, 15000);
    
  }

}
