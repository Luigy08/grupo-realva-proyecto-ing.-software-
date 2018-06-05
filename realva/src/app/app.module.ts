import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { AdminPage } from "../pages/admin/admin";
import { AppMaskerModule } from 'brmasker-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductPage } from "../pages/product/product";
import { DownloadsPage } from '../pages/downloads/downloads';
import { RegisterPage } from '../pages/register/register';
import { LoginRegisterProvider } from '../providers/login-register/login-register';
import { ImageDataProvider } from '../providers/image-data/image-data';


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
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AppMaskerModule
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
    RegisterPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginRegisterProvider,
    ImageDataProvider
  ]
})
export class AppModule { }
