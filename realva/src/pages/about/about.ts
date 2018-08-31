import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginRegisterProvider} from "../../providers/login-register/login-register";
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {AdminPage} from "../admin/admin";
import {ProfilePage} from "../profile/profile"
import { DECELERATION_FRICTION } from 'ionic-angular/umd/components/picker/picker-options';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  login = LoginPage;
  register = RegisterPage;
  Admin = AdminPage;
  Profile = ProfilePage;
  iClicked:boolean = false;
  constructor(public navCtrl: NavController,public LoginRegister: LoginRegisterProvider) {
    
  }
  
  openElement(elementName, num) {
    // Declare all variables

    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(elementName).style.display = "block";
    if(num == 1){
      this.iClicked = true;
      console.log(this.iClicked);
    }
    if(this.iClicked){
      if(elementName == "Mision"){
        document.getElementById("default").className = "tablinks active";
      } 
      
      if(elementName == "Vision"){
        document.getElementById("vision").className = "tablinks active";
      }
      if(elementName == "Valores"){
        document.getElementById("valores").className = "tablinks active";
      }
    } else {
      if(elementName == "Mision"){
        document.getElementById("default").className = "tablinks active";
      } 
    }
    
    //evt.currentTarget.className += "active";
  }
  getiClicked(){
    return this.iClicked;
  }
}
