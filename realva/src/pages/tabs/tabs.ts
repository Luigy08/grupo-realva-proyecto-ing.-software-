import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProductPage} from "../product/product";
import {AdminPage} from "../admin/admin";
import {DownloadsPage} from "../downloads/downloads";
import {LoginRegisterProvider} from "../../providers/login-register/login-register"
import { CotizarPage } from '../cotizar/cotizar';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProductPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;
  tab5Root = AdminPage;
  tab6Root = DownloadsPage;
  tab7Root = CotizarPage;
  constructor(public LoginRegister: LoginRegisterProvider) {

  }
  

}
