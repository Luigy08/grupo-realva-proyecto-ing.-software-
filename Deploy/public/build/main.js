webpackJsonp([6],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login_register_login_register__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DownloadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DownloadsPage = /** @class */ (function () {
    function DownloadsPage(navCtrl, navParams, LoginRegister) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LoginRegister = LoginRegister;
        this.login = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.register = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */];
        this.Admin = __WEBPACK_IMPORTED_MODULE_5__admin_admin__["a" /* AdminPage */];
        this.Profile = __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */];
    }
    DownloadsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DownloadsPage');
    };
    DownloadsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-downloads',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\downloads\downloads.html"*/'<!--\n\n  Generated template for the DownloadsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>downloads</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="LoginRegister.LogOut()" *ngIf="LoginRegister.ClientAuth||LoginRegister.AdminAuth">\n\n        Cerrar Sesion\n\n      </button>\n\n      <button ion-button [navPush]="login" *ngIf="!LoginRegister.ClientAuth&&!LoginRegister.AdminAuth">Iniciar Sesion\n\n      </button>\n\n      <button ion-button [navPush]="register" *ngIf="!LoginRegister.ClientAuth&&!LoginRegister.AdminAuth"> Registrarse\n\n      </button>\n\n      <button ion-button [navPush]="Admin" *ngIf="LoginRegister.AdminAuth"> Administracion</button>\n\n      <button ion-button [navPush]="Profile" *ngIf="LoginRegister.ClientAuth"> Ver Perfil</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="Downloads">\n\n    <h1>Zona de Descargas</h1>\n\n    <ion-list id="list">\n\n      <a href="" ion-item download>Descargar catálogo 1</a>\n\n      <a href="" ion-item download>Descargar catálogo 2</a>\n\n      <a href="" ion-item download>Descargar catálogo 3</a>\n\n      <a href="" ion-item download>Descargar catálogo 4</a>\n\n      <a href="" ion-item download>Descargar catálogo 5</a>\n\n      <a href="" ion-item download>Descargar catálogo 6</a>\n\n    </ion-list>\n\n  </div>\n\n  <div class="footer">\n\n    <div class="footerTop">\n\n      <div>\n\n        <p style="color: white;">Direccion: </p>\n\n        <p style="color: white;">Edificio Alvarenga, Boulevard Morazan </p>\n\n        <p style="color: white;">Contiguo Paso Desnivel Las Lomas </p>\n\n        <p style="color: white;">Tegucigalpa, M.D.C. </p>\n\n        <p style="color: white;">HONDURAS </p>\n\n        <p style="color: white;"> Telefonos: +(504) 2236-5531 / 2236-5902 / 2236-8719</p>\n\n\n\n      </div>\n\n      <div>\n\n        <p style="color: white;">Correos: </p>\n\n        <p style="color: white;">info@realva.net </p>\n\n        <p style="color: white;">info@induvet.com </p>\n\n      </div>\n\n      <div>\n\n        <p style="color: white;"> Valores: </p>\n\n        <p style="color: white;">- Honestidad</p>\n\n        <p style="color: white;">- Servicio</p>\n\n        <p style="color: white;">- Responsabilidad</p>\n\n        <p style="color: white;">- Transparencia</p>\n\n        <p style="color: white;">- Calidad</p>\n\n        <p style="color: white;">- Seguridad</p>\n\n\n\n      </div>\n\n    </div>\n\n    <div class="footerBot">\n\n      <p>© copyright</p>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\downloads\downloads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_login_register_login_register__["a" /* LoginRegisterProvider */]])
    ], DownloadsPage);
    return DownloadsPage;
}());

//# sourceMappingURL=downloads.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ShowproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowproductPage = /** @class */ (function () {
    function ShowproductPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.producto = navParams.get('productoEntrada');
        console.log(this.producto.price);
    }
    ShowproductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowproductPage');
    };
    ShowproductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showproduct',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\showproduct\showproduct.html"*/'<!--\n\n  Generated template for the ShowproductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Regresar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="bodyShowProduct">\n\n    <div class="bodyShowProductTop">\n\n      <div class="bodyShowProductTopLeft">\n\n          <img src={{producto.imagen}} alt="">\n\n      </div>\n\n      <div class="bodyShowProductTopRight">\n\n        <div margin-left="2%">\n\n          <h2 margin-top="2px">{{producto.nombre}} </h2>\n\n          <p><b>Precio:</b> L. {{producto.precio}}</p>\n\n          <p><b>Descripcion: </b>{{producto.descripcion}}</p>\n\n          <p margin-top="2px"><b>Indicaciones: </b>{{producto.indicaciones}}</p>\n\n          <p><b>Contra indicaciones: </b>{{producto.contraindicaciones}}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="bodyShowProductBot">\n\n      <div margin-left="5%" margin-top="2%">\n\n        <p><b>Especies: </b>{{producto.especie}}</p>\n\n        <p><b>Tipo de uso: </b>{{producto.tipoUso}}</p>\n\n        <p><b>Dosis: </b>{{producto.dosis}}</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\showproduct\showproduct.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ShowproductPage);
    return ShowproductPage;
}());

//# sourceMappingURL=showproduct.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		504,
		5
	],
	"../pages/downloads/downloads.module": [
		505,
		4
	],
	"../pages/login/login.module": [
		506,
		3
	],
	"../pages/profile/profile.module": [
		507,
		2
	],
	"../pages/register/register.module": [
		508,
		1
	],
	"../pages/showproduct/showproduct.module": [
		509,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_alert_alert_controller__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_toast_toast_controller__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ImageDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ImageDataProvider = /** @class */ (function () {
    function ImageDataProvider(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.file = "hola.png";
    }
    ImageDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
    ], ImageDataProvider);
    return ImageDataProvider;
}());

//# sourceMappingURL=image-data.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegisterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the LoginRegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginRegisterProvider = /** @class */ (function () {
    function LoginRegisterProvider(alertCtrl, http, afDatabase) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.afDatabase = afDatabase;
        this.AdminAuth = false;
        this.ClientAuth = false;
    }
    LoginRegisterProvider.prototype.chargeUsers = function () {
    };
    LoginRegisterProvider.prototype.AdminLogin = function () {
        this.AdminAuth = !this.AdminAuth;
    };
    LoginRegisterProvider.prototype.LogOut = function () {
        this.userLogged = null;
    };
    LoginRegisterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LoginRegisterProvider);
    return LoginRegisterProvider;
}());

//# sourceMappingURL=login-register.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__downloads_downloads__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_register_login_register__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = /** @class */ (function () {
    function TabsPage(LoginRegister) {
        this.LoginRegister = LoginRegister;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__product_product__["a" /* ProductPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__admin_admin__["a" /* AdminPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_6__downloads_downloads__["a" /* DownloadsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement=\'top\' class="menu" color="mynewcolor" >\n\n  <ion-tab [root]="tab1Root" tabTitle="INICIO" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="PRODUCTOS" tabIcon="md-cart"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="NOSOTROS" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="CONTACTO" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab6Root" tabTitle="DESCARGAS" tabIcon="download"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_login_register_login_register__["a" /* LoginRegisterProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_register_login_register__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, LoginRegister) {
        this.navCtrl = navCtrl;
        this.LoginRegister = LoginRegister;
        this.login = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
        this.register = __WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */];
        this.Admin = __WEBPACK_IMPORTED_MODULE_5__admin_admin__["a" /* AdminPage */];
        this.Profile = __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */];
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="LoginRegister.LogOut()" *ngIf="LoginRegister.ClientAuth||LoginRegister.AdminAuth">Cerrar Sesion</button>\n\n      <button ion-button [navPush]="login" *ngIf="!LoginRegister.ClientAuth&&!LoginRegister.AdminAuth">Iniciar Sesion</button>\n\n      <button ion-button [navPush]="register" *ngIf="!LoginRegister.ClientAuth&&!LoginRegister.AdminAuth"> Registrarse </button>\n\n      <button ion-button [navPush]="Admin" *ngIf="LoginRegister.AdminAuth"> Administracion </button>\n\n      <button ion-button [navPush]="Profile" *ngIf="LoginRegister.ClientAuth"> Ver Perfil </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="About">\n\n    <!--Begin main container-->\n\n    <h1>Nosotros</h1>\n\n    <div class="genBlock">\n\n      <!--Begin General information block-->\n\n      <p>\n\n        <br>Empresas Productoras, Importadoras y Distribuidoras de Productos Veterinarios y Agrícolas. Las empresas manejan la\n\n        representación de diversas líneas Veterinarias de calidad y está en proceso de comenzar la distribución de líneas\n\n        de productos agrícolas. Se manejan líneas de calidad global reconocida como lo es BAYER (Alemania) y MSD (USA), y\n\n        líneas de calidad regional reconocida como lo son las marcas INVET (Colombia), LAVET (Guatemala), LABIPHARM (Guatemala),\n\n        GAMMA LABORATORIES (El Salvador), ERMA (Colombia), VM (Colombia) VET BRANDS (USA) y SANFER (México) entre otros.\n\n        <br>\n\n        <br>La empresa tiene una red de distribución a nivel de todo Honduras, con dos sucursales, una en Tegucigalpa y otra\n\n        en San Pedro Sula, además de distribución por medio de vendedores de ruta alcanzando todo el territorio nacional.\n\n        Además, de la distribución actual, la empresa está desarrollando proyectos para participar en el mercado regional\n\n        de América Central con distribuciones exclusivas regionales.\n\n        <br>\n\n        <br>La empresa atiende las diversas especies productivas del mercado además de las especies de compañía existentes en\n\n        la región. Existe una amplia gama de productos de la mayor calidad que sirven para atender la gran mayoría de las\n\n        necesidades del mercado veterinario y productivo del país.\n\n      </p>\n\n    </div><br>\n\n    <!--End General information block-->\n\n    <div class="bigBlock">\n\n      <!--Begin blocks container-->\n\n\n\n      <div class="blocks">\n\n        <!--Begin block (Mission) container-->\n\n        <h2>Misión</h2>\n\n        <p>\n\n          Brindar al mercado agropecuario y de mascotas de Honduras y América Central productos, servicios y soluciones de alta calidad\n\n          para el desarrollo adecuado de los animales de compañía, productos pecuarios y agro alimentarios del país, promoviendo\n\n          y manteniendo siempre la seguridad de la comunidad como el valor primordial de la empresa.\n\n        </p>\n\n      </div>\n\n      <!--End block (Mission) container-->\n\n\n\n      <div class="blocks">\n\n        <!--Begin block (Vision) container-->\n\n        <h2>Visión</h2>\n\n        <p>\n\n          Ser una empresa líder en el mercado agropecuario y de mascotas de Honduras y América Central, siendo reconocidos como una\n\n          empresa que represente calidad en todos los productos y servicios que brinde, manteniendo una trayectoria de servicio,\n\n          honestidad, calidad y crecimiento intachable.\n\n        </p>\n\n      </div>\n\n      <!--End block (Vision) container-->\n\n\n\n      <div class="blocks">\n\n        <!--Begin block (Values) container-->\n\n        <h2>Valores</h2>\n\n        <ul>\n\n          <li>Honestidad</li>\n\n          <li>Servicio</li>\n\n          <li>Responsabilidad</li>\n\n          <li>Transparencia</li>\n\n          <li>Calidad</li>\n\n          <li>Seguridad</li>\n\n        </ul>\n\n      </div>\n\n      <!--End block (Values) container-->\n\n\n\n    </div>\n\n    <!--End blocks container-->\n\n\n\n  </div>\n\n  <!--End main container-->\n\n  <<div class="footer">\n\n  <div class="footerTop">\n\n    <div>\n\n      <p style="color: white;">Direccion: </p>\n\n      <p style="color: white;">Edificio Alvarenga, Boulevard Morazan </p>\n\n      <p style="color: white;">Contiguo Paso Desnivel Las Lomas </p>\n\n      <p style="color: white;">Tegucigalpa, M.D.C. </p>\n\n      <p style="color: white;">HONDURAS </p>\n\n      <p style="color: white;"> Telefonos: +(504) 2236-5531 / 2236-5902 / 2236-8719</p>\n\n\n\n    </div>\n\n    <div>\n\n      <p style="color: white;">Correos: </p>\n\n      <p style="color: white;">info@realva.net </p>\n\n      <p style="color: white;">info@induvet.com </p>\n\n    </div>\n\n    <div>\n\n      <p style="color: white;"> Valores: </p>\n\n      <p style="color: white;">- Honestidad</p>\n\n      <p style="color: white;">- Servicio</p>\n\n      <p style="color: white;">- Responsabilidad</p>\n\n      <p style="color: white;">- Transparencia</p>\n\n      <p style="color: white;">- Calidad</p>\n\n      <p style="color: white;">- Seguridad</p>\n\n\n\n    </div>\n\n  </div>\n\n  <div class="footerBot">\n\n    <p>© copyright</p>\n\n  </div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_login_register_login_register__["a" /* LoginRegisterProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_login_register_login_register__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ContactPage = /** @class */ (function () {
    function ContactPage(http, nav, LoginRegister, actionSheetCtrl, alertCtrl) {
        this.http = http;
        this.LoginRegister = LoginRegister;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.Data = {};
        this.login = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.register = __WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */];
        this.Admin = __WEBPACK_IMPORTED_MODULE_7__admin_admin__["a" /* AdminPage */];
        this.Profile = __WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */];
        this.http = http;
        this.contactForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            message: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]
        });
    }
    ContactPage.prototype.post = function () {
        if (this.contactForm.valid) {
            if (this.http.post("api/form/d34b479b-974b-53dd-9737-94d59ea03275/form-response", this.Data).subscribe() != null) {
                this.contactForm.reset();
                this.presentAlert("Mensaje Enviado", "Su mensaje ha sido enviado con éxito!", "Ok");
            }
        }
        else {
            this.presentAlert("Error", "Ingrese todos sus datos de manera correcta!", "Ok");
        }
    };
    ContactPage.prototype.presentAlert = function (Title, SubTitle, Button) {
        var alert = this.alertCtrl.create({
            title: Title,
            subTitle: SubTitle,
            buttons: [Button]
        });
        alert.present();
    };
    ContactPage.prototype.onKeyUp = function (event) {
        var newValue = event.target.value;
        var regExp = new RegExp('^[A-ZaÑñÁÉÍÓÚáéíóú,a-z, ]+$');
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contacto\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="LoginRegister.LogOut()" *ngIf="LoginRegister.ClientAuth||LoginRegister.AdminAuth">\n\n        Cerrar Sesion\n\n      </button>\n\n      <button ion-button [navPush]="login" *ngIf="!LoginRegister.ClientAuth&&!LoginRegister.AdminAuth">Iniciar Sesion\n\n      </button>\n\n      <button ion-button [navPush]="register" *ngIf="!LoginRegister.ClientAuth&&!LoginRegister.AdminAuth"> Registrarse\n\n      </button>\n\n      <button ion-button [navPush]="Admin" *ngIf="LoginRegister.AdminAuth"> Administracion</button>\n\n      <button ion-button [navPush]="Profile" *ngIf="LoginRegister.ClientAuth"> Ver Perfil</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="Contact">\n\n    <h1>Contacto</h1>\n\n    <div class="maps-location">\n\n      <iframe allowfullscreen="" frameborder="0" height="400"\n\n              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.6069125744443!2d-87.18652868532534!3d14.100366790122589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2d8da2100d3%3A0xb4d71a25f87cfdc2!2sAgropecuaria+Realva!5e0!3m2!1sen!2shn!4v1527009401267"\n\n              style="border:0" width="100%"></iframe>\n\n    </div>\n\n    <div>\n\n      <h2>Nuestra Ubicación</h2>\n\n      <div class="row">\n\n        <div class="col-sm-3 col">\n\n          <strong>Distribuidora REALVA e INDUSTRIA VETERINARIA S. de R.L.</strong>\n\n          <br>\n\n          <address>\n\n            Edificio Alvarenga, Boulevard Morazán Contiguo Paso Desnivel Las Lomas, Tegucigalpa, Honduras.\n\n          </address>\n\n        </div>\n\n        <div class="col-sm-3 col">\n\n          <strong>Teléfonos</strong>\n\n          <br> +(504) 2236-5531 / 2236-5902 / 2236-8719\n\n          <br>\n\n          <br>\n\n          <strong>Correos</strong>\n\n          <br>\n\n          <a href="mailto:info@realva.com" target="_top">info@realva.com</a>\n\n          <br>\n\n          <br>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n    <h2>Formulario de Contacto </h2>\n\n    <form [formGroup]="contactForm" (ngSubmit)="post()">\n\n      <fieldset>\n\n        <div class="form-group required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-name">Tu Nombre:</label>\n\n            <input type="text" class="form-control" [(ngModel)]="Data.username" name="username"\n\n                   formControlName="username" (keypress)="onKeyUp($event)"\n\n                   (keyup)="onKeyUp($event)" min="10" max="32" required>\n\n          </div>\n\n        </div>\n\n        <div class="form-group required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-email">Correo Electrónico:</label>\n\n            <input type="text" class="form-control" [(ngModel)]="Data.email" name="email" formControlName="email"\n\n                   required ngModel email>\n\n          </div>\n\n        </div>\n\n        <div class="form-group required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-enquiry">Mensaje:</label>\n\n            <textarea rows="10" id="input-enquiry" class="form-control" [(ngModel)]="Data.message" name="message"\n\n                      formControlName="message"\n\n                      min="10" max="3000" required></textarea>\n\n          </div>\n\n        </div>\n\n      </fieldset>\n\n      <div class="buttonsContacto">\n\n        <div class="pull-right">\n\n          <input class="btn btn-primary button" type="submit" value="Enviar">\n\n        </div>\n\n      </div>\n\n    </form>\n\n  </div>\n\n  <div class="footer">\n\n    <div class="footerTop">\n\n      <div>\n\n        <p style="color: white;">Direccion: </p>\n\n        <p style="color: white;">Edificio Alvarenga, Boulevard Morazan </p>\n\n        <p style="color: white;">Contiguo Paso Desnivel Las Lomas </p>\n\n        <p style="color: white;">Tegucigalpa, M.D.C. </p>\n\n        <p style="color: white;">HONDURAS </p>\n\n        <p style="color: white;"> Telefonos: +(504) 2236-5531 / 2236-5902 / 2236-8719</p>\n\n\n\n      </div>\n\n      <div>\n\n        <p style="color: white;">Correos: </p>\n\n        <p style="color: white;">info@realva.net </p>\n\n        <p style="color: white;">info@induvet.com </p>\n\n      </div>\n\n      <div>\n\n        <p style="color: white;"> Valores: </p>\n\n        <p style="color: white;">- Honestidad</p>\n\n        <p style="color: white;">- Servicio</p>\n\n        <p style="color: white;">- Responsabilidad</p>\n\n        <p style="color: white;">- Transparencia</p>\n\n        <p style="color: white;">- Calidad</p>\n\n        <p style="color: white;">- Seguridad</p>\n\n\n\n      </div>\n\n    </div>\n\n    <div class="footerBot">\n\n      <p>© copyright</p>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_login_register_login_register__["a" /* LoginRegisterProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_register_login_register__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__showproduct_showproduct__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cotizar_cotizar__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProductPage = /** @class */ (function () {
    function ProductPage(navCtrl, LoginRegister, afDatabase, afAuth) {
        this.navCtrl = navCtrl;
        this.LoginRegister = LoginRegister;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.login = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
        this.register = __WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */];
        this.Admin = __WEBPACK_IMPORTED_MODULE_5__admin_admin__["a" /* AdminPage */];
        this.Profile = __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */];
        this.cotizaciones = new Array();
        this.productoRef = afDatabase.list('productos');
        this.productos = this.productoRef.valueChanges();
        console.log(this.productoRef.valueChanges().clave);
    }
    ProductPage.prototype.cotizando = function (c) {
        if (this.cotizaciones.length == 0) {
            this.cotizaciones.push(c);
        }
        else {
            for (var i = 0; i < this.cotizaciones.length; i++) {
                if (this.cotizaciones[i] == c) {
                    break;
                }
                if (i == this.cotizaciones.length - 1 && this.cotizaciones != c) {
                    this.cotizaciones.push(c);
                }
            }
        }
    };
    ProductPage.prototype.push = function (p) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__showproduct_showproduct__["a" /* ShowproductPage */], { productoEntrada: p });
    };
    ProductPage.prototype.pushCotizar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__cotizar_cotizar__["a" /* CotizarPage */], { productoEntrada: this.cotizaciones });
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\product\product.html"*/'<ion-header>\n\n  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"\n\n        integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">\n\n  <ion-navbar>\n\n    <ion-title>Product</ion-title>\n\n    <ion-buttons end>\n\n        <app-header></app-header>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="productAll">\n\n    <div class="bodyProduct">\n\n      <div class="bodyProductTop">\n\n        <div class="titleProduct">\n\n          <div class="productProductos">\n\n            <h2>CATEGORIAS</h2>\n\n            <hr>\n\n          </div>\n\n          <div class="productCategorias">\n\n            <h2>PRODUCTOS</h2>\n\n            <HR>\n\n          </div>\n\n          <div>\n\n            <button ion-button icon-start (click)="pushCotizar(producto)" >\n\n              <ion-icon name="ios-clipboard"></ion-icon>\n\n              Cotizar\n\n            </button>\n\n          </div>\n\n        </div>\n\n\n\n\n\n        <div class="productBody">\n\n          <div class="productBodyLeft">\n\n\n\n            <!--<ion-item>\n\n              <ion-label>Employee</ion-label>\n\n              <ion-select [(ngModel)]="employee" [compareWith]="compareFn">\n\n                <ion-option *ngFor="let employee of employees" [value]="employee"></ion-option>\n\n              </ion-select>\n\n\n\n              autoplay="3000" loop="true" speed="3000" c\n\n            </ion-item> -->\n\n\n\n\n\n          </div>\n\n\n\n          <div class="productBodyRight">\n\n            <div class="album py-5 bg-light">\n\n              <div class="container">\n\n                <div class="row">\n\n                  <div class="col-md-4" *ngFor=\'let producto of productos | async \'>\n\n                    <div class="card mb-4 box-shadow">\n\n                      <img class="imagenProducto" src={{producto.imagen}}>\n\n                      <div class="card-body">\n\n                        <p class="card-text">{{producto.nombre}} </p>\n\n                        <p class="card-text" > Precio: L. {{producto.precio}} </p>\n\n                        <div class="d-flex justify-content-between align-items-center">\n\n                          <div class="btn-group">\n\n                            <button (click)="push(producto)" type="button" class="btn btn-sm btn-outline-secondary">Mirar</button>\n\n                            <button (click)= "cotizando(producto)"type="button" class="btn btn-sm btn-outline-secondary">Cotizar</button>\n\n                          </div>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n\n\n                  </div>\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n  </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\product\product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_login_register_login_register__["a" /* LoginRegisterProvider */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_register_login_register__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CotizarPage = /** @class */ (function () {
    function CotizarPage(navCtrl, LoginRegister, navParams) {
        this.navCtrl = navCtrl;
        this.LoginRegister = LoginRegister;
        this.navParams = navParams;
        this.productos = navParams.get('productoEntrada');
    }
    CotizarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cotizar',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\cotizar\cotizar.html"*/'<!--\n\n  Generated template for the ShowproductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Regresar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="cotizarBody">\n\n    <div class="cotizarProductos">\n\n      <ion-card>\n\n        <ion-card-header>\n\n          Productos a Cotizar\n\n        </ion-card-header>\n\n        <ion-list *ngFor="let producto of productos">\n\n          <ion-icon name="arrow-dropright"></ion-icon>\n\n          {{producto["nombre"]}}\n\n        </ion-list>\n\n      </ion-card>\n\n    </div>\n\n    <div class="cotizarFormulario">\n\n      <form  (ngSubmit)="logForm()">\n\n        <ion-item>\n\n          <ion-label>Nombre</ion-label>\n\n          <ion-input [(ngModel)]="nombre" name="title"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>Email</ion-label>\n\n          <ion-input type="email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>Telefono</ion-label>\n\n          <ion-input type="tel"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked>Descripcon</ion-label>\n\n          <ion-input type="tel"  #msgInput rows="10" maxLength="500" ></ion-input>\n\n        </ion-item>\n\n\n\n      </form>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\cotizar\cotizar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_login_register_login_register__["a" /* LoginRegisterProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CotizarPage);
    return CotizarPage;
}());

//# sourceMappingURL=cotizar.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(421);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_data_image_data__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams, http, image) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.image = image;
        this.imageUrl = "";
        this.imageUrl2 = "";
        this.prueba = "Texto";
        this.chargeClients();
    }
    AdminPage.prototype.chargeClients = function () {
        var _this = this;
        this.http.get('server/get_client.php').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.clients = data, function (err) {
                console.log("Oops!");
            };
        });
        this.http.get('server/get_client_rtn.php').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.clientsRTN = data, function (err) {
                console.log("Oops!");
            };
        });
        this.http.get('server/get_client_phone.php').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.clientsTelephone = data, function (err) {
                console.log("Oops!");
            };
        });
    };
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.loadimage = function () {
    };
    AdminPage.prototype.handleFileInput = function (event) {
        var _this = this;
        console.log(event);
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
    };
    AdminPage.prototype.handleFileInput2 = function (event) {
        var _this = this;
        console.log(event);
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
    };
    AdminPage.prototype.upload = function () {
        // upload code goes here
    };
    AdminPage.prototype.uploadPic = function () {
        console.log(this.selectedFile.name);
        console.log(this.selectedFile.type);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpHeaders */]({ 'Content-Type': 'application/octet-stream' }), fileName = Date.now() + '.' + this.selectedFile.type, options = { "name": this.selectedFile, "file": this.selectedFile };
        return this.http.post("server/upload.php", JSON.stringify(options), headers).subscribe();
    };
    AdminPage.prototype.DeleteImageCarrOfer = function (ImageId) {
    };
    AdminPage.prototype.DeleteImageCarrMain = function (ImageId) {
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\admin\admin.html"*/'<!--\n\n  Generated template for the AdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title end>Admin</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <ion-segment [(ngModel)]="AdminTab" color="primary">\n\n      <ion-segment-button value="CarruselOfertas">\n\n        Carrusel Ofertas\n\n      </ion-segment-button>\n\n      <ion-segment-button value="CarruselPrincipal">\n\n        Carrusel Principal\n\n      </ion-segment-button>\n\n      <ion-segment-button value="AceptacionClientes">\n\n        Aceptacion de Clientes\n\n      </ion-segment-button>\n\n      <ion-segment-button value="ArchivosDescarga">\n\n        Administrar Archivos de Descarga\n\n      </ion-segment-button>\n\n      <ion-segment-button value="SubirProducto">\n\n        Administrar Productos\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n  <div [ngSwitch]="AdminTab">\n\n    <div *ngSwitchCase="\'CarruselOfertas\'">\n\n      <form #imageForm="ngForm" method="POST">\n\n        <input type="file" #Image accept="image/*" (change)="handleFileInput($event)">\n\n        <button ion-button type="submit" (click)="uploadPic()">Subir</button>\n\n      </form>\n\n      <ion-list *ngFor="let post of posts">\n\n        <ion-item>\n\n          <ion-card>\n\n            {{post.product_id}}\n\n            <button ion-button (click)="DeleteImageCarrOfer(image.id)"></button>\n\n          </ion-card>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div *ngSwitchCase="\'CarruselPrincipal\'">\n\n      <form #imageForm="ngForm" method="POST">\n\n        <input type="file" #Image accept="image/*" (change)="handleFileInput($event)">\n\n        <button ion-button type="submit" (click)="uploadPic()">Subir</button>\n\n      </form>\n\n      <ion-list *ngFor="let image of images">\n\n        <ion-item>\n\n          <ion-card>\n\n            <ion-card-content>\n\n              <button (click)="DeleteImageCarrMain(image.id)"></button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div *ngSwitchCase="\'ArchivosDescarga\'">\n\n      <form #DocumentForm="ngForm" method="POST">\n\n        <input type="file" (change)="handleFileInput($event)">\n\n        <button ion-button type="submit" (click)="upload()">Subir</button>\n\n      </form>\n\n    </div>\n\n    <div *ngSwitchCase="\'SubirProducto\'">\n\n\n\n    </div>\n\n    <div *ngSwitchCase="\'AceptacionClientes\'">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            <h2>Id</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Nombre</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Apellido</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Estado</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Saldo</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Clasificación</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>RTN</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Teléfono</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Modificar</h2>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngFor="let client of clients">\n\n          <ion-col>\n\n            {{client.client_id}}\n\n          </ion-col>\n\n          <ion-col>\n\n            {{client.client_name}}\n\n          </ion-col>\n\n          <ion-col>\n\n            {{client.client_last_name}}\n\n          </ion-col>\n\n          <ion-col>\n\n            {{client.client_status}}\n\n          </ion-col>\n\n          <ion-col>\n\n            {{client.client_balance}}\n\n          </ion-col>\n\n          <ion-col>\n\n            {{client.client_classification}}\n\n          </ion-col>\n\n          <ion-col>\n\n            <div *ngFor="let rtn of clientsRTN">\n\n              <span *ngIf="rtn.fk_client_id == client.client_id">\n\n                {{rtn.rtn_client}}\n\n              </span>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col>\n\n            <div *ngFor="let telephone of clientsTelephone">\n\n              <span *ngIf="telephone.fk_client_id == client.client_id">\n\n                {{telephone.phone_client}}\n\n              </span>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button>Modificar</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_image_data_image_data__["a" /* ImageDataProvider */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_brmasker_ionic__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_login_register_login_register__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_image_data_image_data__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_product_product__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_downloads_downloads__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_showproduct_showproduct__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__header_header_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cotizar_cotizar__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var firebaseConfig = {
    apiKey: "AIzaSyBZAKqZfYiuQDTF-pDtZsxlO5X72wNFA1Q",
    authDomain: "realva-54c4a.firebaseapp.com",
    databaseURL: "https://realva-54c4a.firebaseio.com",
    projectId: "realva-54c4a",
    storageBucket: "realva-54c4a.appspot.com",
    messagingSenderId: "233461489484"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_showproduct_showproduct__["a" /* ShowproductPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cotizar_cotizar__["a" /* CotizarPage */],
                __WEBPACK_IMPORTED_MODULE_25__header_header_component__["a" /* HeaderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/downloads/downloads.module#DownloadsPageModule', name: 'DownloadsPage', segment: 'downloads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/showproduct/showproduct.module#ShowproductPageModule', name: 'ShowproductPage', segment: 'showproduct', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_brmasker_ionic__["a" /* AppMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_22_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_showproduct_showproduct__["a" /* ShowproductPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cotizar_cotizar__["a" /* CotizarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_login_register_login_register__["a" /* LoginRegisterProvider */],
                __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_image_data_image_data__["a" /* ImageDataProvider */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["a" /* AngularFireAuth */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, afDatabase, navParams, http, loginRegister, alertCtrl) {
        this.navCtrl = navCtrl;
        this.afDatabase = afDatabase;
        this.navParams = navParams;
        this.http = http;
        this.loginRegister = loginRegister;
        this.alertCtrl = alertCtrl;
        this.Data = {};
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
        });
    }
    LoginPage.prototype.Loginpost = function () {
        if (this.loginRegister.userLogged != null) {
            this.loginForm.reset();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        else {
            this.presentAlert("Error Inicio de Sesion", "Usuario o Contraseña incorrectos", "OK");
        }
    };
    LoginPage.prototype.Login = function (Data) {
        var _this = this;
        var clientesRef = this.afDatabase.list('clientes').valueChanges().subscribe(function (data) {
            data.forEach(function (element) {
                var temp = element;
                if (temp.Correo == Data.username) {
                    if (temp.Contraseña == Data.password) {
                        _this.loginRegister.userLogged = temp;
                        console.log(temp);
                    }
                }
            });
            _this.Loginpost();
        });
        ;
    };
    LoginPage.prototype.presentAlert = function (Title, SubTitle, Button) {
        var alert = this.alertCtrl.create({
            title: Title,
            subTitle: SubTitle,
            buttons: [Button]
        });
        alert.present();
    };
    LoginPage.prototype.login = function (data) {
        /*let data = this.loginForm.value;
    
            if (!data.email) {
                return;
            }
    
            let credentials = {
                email: data.email,
                password: data.password
            };
            this.auth.signInWithEmail(credentials)
                .then(
                    () => this.navCtrl.setRoot(HomePage),
                    error => this.loginError = error.message
                );*/
    }; //login method
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Iniciar Sesion</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1 class="Login">Iniciar Sesion</h1>\n\n  <form [formGroup]="loginForm" (ngSubmit)="Login(Data);">\n\n    <fieldset>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-name">Correo Electronico:</label>\n\n          <input type="text" class="form-control" [(ngModel)]="Data.username" name="username" formControlName="username" required>\n\n        </div>\n\n      </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-password">Contraseña:</label>\n\n          <input type="password" class="form-control" [(ngModel)]="Data.password" name="password" formControlName="password" required\n\n            ngModel>\n\n        </div>\n\n      </div>\n\n    </fieldset>\n\n    <div class="buttons">\n\n      <div class="pull-right">\n\n        <input class="btn btn-primary button" type="submit" value="Ingresar">\n\n      </div>\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__["a" /* LoginRegisterProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}()); //main brackets

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, alertCtrl, afDatabase, navParams, LoginRegister) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.afDatabase = afDatabase;
        this.navParams = navParams;
        this.LoginRegister = LoginRegister;
        this.Data = {};
        this.Contravalnull = false;
        this.my_variable = '#bfbcbc';
        this.registroExitoso = false;
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10)]),
            userlastname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10)]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]),
            direction: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            telephone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator]),
            telephone2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator]),
            RTN: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(14)]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator]),
            Repassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator]),
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.Register = function (Data, estado) {
        console.log(Data);
        var clientesRef = this.afDatabase.list('clientes').push({});
        clientesRef.set({ id: clientesRef.key, ClaveCliente: 0, NombreEmpresa: Data.username, NombreRepresentante: Data.userlastname, RTN: Data.RTN, Estatus: estado, Telefono1: Data.telephone, Telefono2: Data.telephone2, Contraseña: Data.password, Clasificacion: 0, Saldo: 0, Direccion: Data.direction, Correo: Data.email });
        this.presentAlert("Registro Exitoso", "Se logro registrar con exito", "OK");
        this.registroExitoso = true;
    };
    RegisterPage.prototype.presentAlert = function (Title, SubTitle, Button) {
        var alert = this.alertCtrl.create({
            title: Title,
            subTitle: SubTitle,
            buttons: [Button]
        });
        alert.present();
    };
    RegisterPage.prototype.onKeyUp = function (event) {
        var newValue = event.target.value;
        var regExp = new RegExp('^[A-ZaÑñÁÉÍÓÚáéíóú,a-z, ]+$');
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
    };
    RegisterPage.prototype.onKeyUpNum = function (event) {
        var newValue = event.target.value;
        var regExp = new RegExp('^[0-9, +()-]+$');
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
    };
    RegisterPage.prototype.onKeyUpRTN = function (event) {
        var newValue = event.target.value;
        var regExp = new RegExp('^[0-9, -]+$');
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
    };
    RegisterPage.prototype.checkPassWord = function (event) {
        this.passwordcheck = event.target.value;
        if (this.passwordcheck == this.passwordcheck1 && this.passwordcheck != "" && this.passwordcheck1 != "") {
            this.my_variable = "green";
        }
        else if (this.passwordcheck1 != "") {
            this.my_variable = '#bfbcbc';
        }
        else {
            this.my_variable = "red";
        }
    };
    RegisterPage.prototype.checkPassWord1 = function (event) {
        this.passwordcheck1 = event.target.value;
        if (this.passwordcheck == this.passwordcheck1 && this.passwordcheck != "" && this.passwordcheck1 != "") {
            this.my_variable = "green";
        }
        else if (this.passwordcheck1 != "") {
            this.my_variable = '#bfbcbc';
        }
        else {
            this.my_variable = "red";
        }
    };
    RegisterPage.prototype.FullRegister = function (Data) {
        this.Register(Data, 0);
        if (this.registroExitoso) {
            this.registerForm.reset();
            this.registroExitoso = false;
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Registro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="registerForm" (ngSubmit)="FullRegister(Data)">\n\n    <fieldset>\n\n        <h1>Registro de Usuario</h1>\n\n        <div class="form-group required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-name">Nombre Empresa:</label>\n\n            <input type="text" class="form-control" [(ngModel)]="Data.username" name="username" formControlName="userlastname" (keypress)="onKeyUp($event)"\n\n              (keyup)="onKeyUp($event)" min="10" max="32" required>\n\n          </div>\n\n        </div>\n\n      <div class="form-group required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-lastname">Nombre Representante:</label>\n\n            <input type="text" class="form-control" [(ngModel)]="Data.userlastname" name="userlastname" formControlName="userlastname" (keypress)="onKeyUp($event)"\n\n              (keyup)="onKeyUp($event)" min="10" max="32" required>\n\n          </div>\n\n        </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-email">Correo Electrónico:</label>\n\n          <input type="text" class="form-control" [(ngModel)]="Data.email" name="email" formControlName="email" required ngModel email>\n\n        </div>\n\n      </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-password">Contraseña:</label>\n\n          <input type="password" class="form-control" [(ngModel)]="Data.password" name="password" formControlName="password" min="5"\n\n            max="32"(keypress)="checkPassWord($event)" (keyup)="checkPassWord($event)" required>\n\n            <div *ngIf="Contravalnull">\n\n              Contraseña tiene que estar lleno\n\n            </div>\n\n        </div>\n\n      </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-password">Ingrese Contraseña Nuevamente:</label>\n\n          <input [style.borderColor]="my_variable" type="password" class="form-control" [(ngModel)]="Data.repassword" name="Repassword" formControlName="Repassword"\n\n            min="5" max="32" required [ngStyle]="style" (keypress)="checkPassWord1($event)" (keyup)="checkPassWord1($event)">\n\n        </div>\n\n      </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-enquiry">Direccion</label>\n\n          <textarea rows="10" id="input-enquiry" class="form-control" [(ngModel)]="Data.direction" name="direction" formControlName="direction"\n\n            min="10" max="3000" required></textarea>\n\n        </div>\n\n      </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-telephone">Telefono 1:</label>\n\n          <input type="tel" class="form-control" [(ngModel)]="Data.telephone" [brmasker]="{mask:\'+(000)0000-0000\', len:15}" name="telephone"\n\n            formControlName="telephone" (keypress)="onKeyUpNum($event)" (keyup)="onKeyUpNum($event)" pattern="[0-9]{8}" min="8"\n\n            max="12" required>\n\n        </div>\n\n      </div>\n\n      <div class="form-group required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-telephone">Telefono 2:</label>\n\n            <input type="tel" class="form-control" [(ngModel)]="Data.telephone2" [brmasker]="{mask:\'+(000)0000-0000\', len:15}" name="telephone2"\n\n              formControlName="telephone2" (keypress)="onKeyUpNum($event)" (keyup)="onKeyUpNum($event)" pattern="[0-9]{8}" min="8"\n\n              max="12" required>\n\n          </div>\n\n        </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-id">RTN:</label>\n\n          <input type="text" class="form-control" [(ngModel)]="Data.RTN" name="RTN" formControlName="RTN" [brmasker]="{mask:\'0000-0000-000000\', len:16}"\n\n            (keypress)="onKeyUpRTN($event)" (keyup)="onKeyUpRTN($event)" min="14" max="17" required>\n\n        </div>\n\n      </div>\n\n    </fieldset>\n\n    <div class="buttons">\n\n      <div class="pull-right">\n\n        <input class="btn btn-primary button" type="submit" value="Registrarse">\n\n      </div>\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__["a" /* LoginRegisterProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, afDatabase, LoginRegister) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.LoginRegister = LoginRegister;
        this.clientesref = afDatabase.list('clientes');
        this.user = this.LoginRegister.userLogged;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.eliminarClientes = function () {
        var mensaje = confirm("¿Seguro que desea Eliminar su cuenta?");
        if (mensaje) {
            this.navCtrl.pop();
            var temp = this.LoginRegister.userLogged.id;
            this.LoginRegister.LogOut();
            this.clientesref.remove(temp);
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">\n\n    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>\n\n    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>\n\n    \n\n  <ion-navbar>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<!-- value="{{user.NombreEmpresa}}"" -->\n\n<ion-content padding>\n\n  <div>\n\n  <div>\n\n    <h1>Perfil de Usuario</h1>\n\n    <img class="avatar" src="assets/icon/perfil.png" alt="">\n\n  </div>\n\n  <div class="form-group1">\n\n    <div class="col-sm-10">\n\n      <label class="col-sm-2 control-label1" for="input-name">Nombre Empresa:</label>\n\n      <input id =\'NombreEmpresa\' type="text" class="form-control1" value="{{user.NombreEmpresa}}" disabled>\n\n    </div>\n\n  </div>\n\n  <div class="form-group1 required">\n\n    <div class="col-sm-10">\n\n      <label class="col-sm-2 control-label1" for="input-lastname">Nombre Representante:</label>\n\n      <input id=\'NombreRepresentante\' type="text" class="form-control1" value="{{user.NombreRepresentante}}"disabled>\n\n    </div>\n\n  </div>\n\n  <div class="form-group1 required">\n\n    <div class="col-sm-10">\n\n      <label class="col-sm-2 control-label1" for="input-email">Correo Electrónico:</label>\n\n      <input id=\'Correo\' type="text" class="form-control1" value="{{user.Correo}}" disabled>\n\n    </div>\n\n  </div>\n\n  <div class="form-group1 required">\n\n    <div class="col-sm-10">\n\n      <label class="col-sm-2 control-label1" for="input-enquiry">Direccion</label>\n\n      <textarea id=\'Direccion\' rows="1" id="input-enquiry" class="form-control1" value="{{user.Direccion}}" disabled></textarea>\n\n    </div>\n\n  </div>\n\n  <div class="form-group1 required">\n\n    <div class="col-sm-10">\n\n      <label class="col-sm-2 control-label1" for="input-telephone">Telefono 1:</label>\n\n      <input id=\'Telefono1\' type="tel" class="form-control1" value="{{user.Telefono1}}"disabled >\n\n    </div>\n\n  </div>\n\n  <div class="form-group1 required">\n\n    <div class="col-sm-10">\n\n      <label class="col-sm-2 control-label1" for="input-telephone">Telefono 2:</label>\n\n      <input id=\'Telefono2\' type="tel" class="form-control1" value="{{user.Telefono2}}" disabled >\n\n    </div>\n\n  </div>\n\n  <div class="form-group1 required">\n\n    <div class="col-sm-10">\n\n      <label class="col-sm-2 control-label1" for="input-id">RTN:</label>\n\n      <input id=\'RTN\' type="text" class="form-control1" value="{{user.RTN}}"disabled>\n\n    </div>\n\n  </div>\n\n</div>\n\n  <div class="buttons1">\n\n      <div>\n\n        <!-- <input  type="delete" value="Eliminar Cuenta"> -->\n\n        <button type="button" class="btn btn-info">Modificar</button>\n\n        <button type="button2" class="btn btn-danger"(click)=\'eliminarClientes()\' >Borrar Cuenta</button>\n\n      </div>\n\n    </div>\n\n</ion-content>\n\n\n\n<!--  -->'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__["a" /* LoginRegisterProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n \n\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_login_register_login_register__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, navCtrl, LoginRegister) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.LoginRegister = LoginRegister;
        this.login = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
        this.perfil = __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */];
        this.register = __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */];
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.logIn = function () {
        this.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    HeaderComponent.prototype.logOut = function () {
        this.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    HeaderComponent.prototype.signUp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], HeaderComponent.prototype, "nav", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: "\n  <ion-buttons end>\n  <button ion-button [navPush]=\"perfil\" *ngIf=\"LoginRegister.userLogged != null\">Perfil</button>\n  <button ion-button (click)=\"LoginRegister.LogOut()\" *ngIf=\"LoginRegister.userLogged != null\">Cerrar Sesion</button>\n  <button ion-button [navPush]=\"login\" *ngIf=\"LoginRegister.userLogged == null\">Iniciar Sesion</button>\n  <button ion-button [navPush]=\"register\" *ngIf=\"LoginRegister.userLogged == null\"> Registrarse </button>\n  </ion-buttons>",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_login_register_login_register__["a" /* LoginRegisterProvider */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login_register_login_register__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, LoginRegister, auth, afDatabase, afAuth) {
        this.navCtrl = navCtrl;
        this.LoginRegister = LoginRegister;
        this.auth = auth;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.login = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.register = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */];
        this.Admin = __WEBPACK_IMPORTED_MODULE_5__admin_admin__["a" /* AdminPage */];
        this.Profile = __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */];
        this.ofertaRef = afDatabase.list('imagenesPrincipal');
        this.ofertas = this.ofertaRef.valueChanges();
        this.logoRef = afDatabase.list('imagenesOfertas');
        this.logos = this.logoRef.valueChanges();
    }
    HomePage.prototype.goToSlide = function () {
        this.slides.slideTo(0, 15000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\home\home.html"*/'<ion-header>\n\n\n\n  <ion-navbar hide-nav-bar="false">\n\n    <app-header></app-header>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="bodyHome">\n\n    <div class="pictureCarrusel">\n\n\n\n      <ion-slides class="carrusel" >\n\n\n\n        <ion-slide *ngFor="let oferta of ofertas | async">\n\n          <img src={{oferta.imagen}}>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n    <div class="home_info">\n\n      <div class="home_info1">\n\n        <h2>Distribuidora REALVA</h2>\n\n\n\n        <p>\n\n          Empresas Productoras, Importadoras y Distribuidoras de Productos Veterinarios y Agrícolas. Las empresas\n\n          manejan la representación\n\n          de diversas líneas Veterinarias de calidad y esta en proceso de comenzar la distribución de líneas de\n\n          productos\n\n          agrícolas. Se manejan líneas de calidad global reconocida como lo es BAYER (Alemania) y MSD (USA), y líneas de\n\n          calidad regional reconocida como lo son las marcas INVET (Colombia), LAVET (Guatemala), LABIPHARM (Guatemala),\n\n          GAMMA LABORATORIES (El Salvador), ERMA (Colombia), VM (Colombia) VET BRANDS (USA) y SANFER (México) entre\n\n          otros.\n\n        </p>\n\n      </div>\n\n      <div class="home_info2" margin-top="4px">\n\n        <div>\n\n          <img src="assets/imgs/portada.jpg">\n\n          <div class="homeText2">\n\n            <p>\n\n              La empresa tiene una red de distribución a nivel de todo Honduras, con dos sucursales, una en Tegucigalpa y\n\n              otra en San Pedro\n\n              Sula, además de distribución por medio de vendedores de ruta alcanzando todo el territorio nacional. Además,\n\n              de la distribución actual, la empresa esta desarrollando proyectos para participar en el mercado regional de\n\n              América Central con distribuciones exclusivas regionales.\n\n            </p>\n\n          </div>\n\n        </div>\n\n        <div>\n\n          <img src="assets/imgs/portada2.jpg">\n\n          <div class="homeText3">\n\n            <p>\n\n              La empresa atiende las diversas especies productivas del mercado además de las especies de compañía\n\n              existentes en la región.\n\n              Existe una amplia gama de productos de la mayor calidad que sirven para atender la gran mayoría de la\n\n              necesidades\n\n              del mercado veterinario y productivo del país.\n\n            </p>\n\n          </div>\n\n\n\n        </div>\n\n      </div>\n\n      <hr>\n\n    </div>\n\n    <div class="pictureCarrusel1">\n\n\n\n      <ion-slides lass="carrusel2">\n\n\n\n        <ion-slide *ngFor="let logo of logos| async">\n\n          <img src={{logo.imagen}}>\n\n        </ion-slide>\n\n\n\n      </ion-slides>\n\n    </div>\n\n    <a href="http://www.google.com/" target="_blank">\n\n      <input type="button" value="Visit Google" />\n\n   </a>\n\n    <div class="footer">\n\n      <div class="footerTop">\n\n        <div>\n\n          <p style="color: white;">Direccion: </p>\n\n          <p style="color: white;">Edificio Alvarenga, Boulevard Morazan </p>\n\n          <p style="color: white;">Contiguo Paso Desnivel Las Lomas </p>\n\n          <p style="color: white;">Tegucigalpa, M.D.C. </p>\n\n          <p style="color: white;">HONDURAS </p>\n\n          <p style="color: white;"> Telefonos: +(504) 2236-5531 / 2236-5902 / 2236-8719</p>\n\n\n\n        </div>\n\n        <div>\n\n          <p style="color: white;">Correos: </p>\n\n          <p style="color: white;">info@realva.net </p>\n\n          <p style="color: white;">info@induvet.com </p>\n\n        </div>\n\n      </div>\n\n      <div class="footerBot">\n\n        <p>© copyright</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Mario\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_login_register_login_register__["a" /* LoginRegisterProvider */], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then(function (response) {
            console.log(response.user.uid);
            var updates = {};
            updates['/clientes/' + response.user.uid] = {
                Clasificacion: credentials.clasification,
                ClaveCliente: credentials.keyClient,
                Contraseña: credentials.password,
                Correo: credentials.email,
                Direccion: credentials.address,
                Estatus: credentials.status,
                Id: credentials.id,
                NombreEmpresa: credentials.companyName,
                NombreRepresentante: credentials.representativeName,
                RTN: credentials.rtn,
                Saldo: credentials.salary,
                Telefono1: credentials.telephone1,
                Telefono2: credentials.telephone2
            };
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref().update(updates);
        });
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ })

},[300]);
//# sourceMappingURL=main.js.map