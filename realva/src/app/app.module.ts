import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Header } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { AdminPage } from "../pages/admin/admin";
import { AppMaskerModule } from 'brmasker-ionic';
import { AuthService } from '../services/auth.service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductPage } from "../pages/product/product";
import { DownloadsPage } from '../pages/downloads/downloads';
import { RegisterPage } from '../pages/register/register';
import { LoginRegisterProvider } from '../providers/login-register/login-register';
import { ImageDataProvider } from '../providers/image-data/image-data';
import { ProfilePage } from '../pages/profile/profile';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { HeaderComponent } from './header/header.component';
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBZAKqZfYiuQDTF-pDtZsxlO5X72wNFA1Q",
  authDomain: "realva-54c4a.firebaseapp.com",
  databaseURL: "https://realva-54c4a.firebaseio.com",
  projectId: "realva-54c4a",
  storageBucket: "realva-54c4a.appspot.com",
  messagingSenderId: "233461489484"

};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductPage,
    LoginPage,
    AdminPage,
    DownloadsPage,
    RegisterPage,
    HeaderComponent,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AppMaskerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductPage,
    LoginPage,
    AdminPage,
    DownloadsPage,
    RegisterPage,
    ProfilePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginRegisterProvider,
    AuthService,
    ImageDataProvider,
    AngularFireAuth
  ]
})
export class AppModule { }
