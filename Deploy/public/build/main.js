webpackJsonp([5],{

/***/ 200:
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
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegisterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(46);
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

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		517,
		4
	],
	"../pages/login/login.module": [
		518,
		3
	],
	"../pages/profile/profile.module": [
		519,
		2
	],
	"../pages/register/register.module": [
		520,
		1
	],
	"../pages/showproduct/showproduct.module": [
		521,
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
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_alert_alert_controller__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_toast_toast_controller__ = __webpack_require__(140);
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

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__downloads_downloads__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_login_register_login_register__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cotizar_cotizar__ = __webpack_require__(306);
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
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_8__cotizar_cotizar__["a" /* CotizarPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement=\'top\' class="menu" color="mynewcolor" >\n\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="PRODUCTOS" tabIcon=""></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="NOSOTROS" tabIcon=""></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="CONTACTO" tabIcon=""></ion-tab>\n\n  <ion-tab [root]="tab6Root" tabTitle="DESCARGAS Y NOTICIAS" tabIcon=""></ion-tab>\n\n  <ion-tab [root]="tab7Root" tabTitle="" tabIcon="md-cart"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_login_register_login_register__["a" /* LoginRegisterProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_register_login_register__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(41);
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
        this.iClicked = false;
    }
    AboutPage.prototype.openElement = function (elementName, num) {
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
        if (num == 1) {
            this.iClicked = true;
            console.log(this.iClicked);
        }
        if (this.iClicked) {
            if (elementName == "Mision") {
                document.getElementById("default").className = "tablinks active";
            }
            if (elementName == "Vision") {
                document.getElementById("vision").className = "tablinks active";
            }
            if (elementName == "Valores") {
                document.getElementById("valores").className = "tablinks active";
            }
        }
        else {
            if (elementName == "Mision") {
                document.getElementById("default").className = "tablinks active";
            }
        }
        //evt.currentTarget.className += "active";
    };
    AboutPage.prototype.getiClicked = function () {
        return this.iClicked;
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\about\about.html"*/'<ion-header>\n\n  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"\n\n    crossorigin="anonymous">\n\n  <script src="scripts/jquery-1.9.0.min.js" type="text/javascript"></script>\n\n  <script src="scripts/jquery-ui-1.10.0.tabs.min.js" type="text/javascript"></script>\n\n\n\n\n\n  <ion-navbar>\n\n    <ion-navbar hide-nav-bar="false">\n\n      <app-header></app-header>\n\n    </ion-navbar>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="About">\n\n    <h1>Nosotros</h1>\n\n    <div class="container">\n\n      <div class="row myRow">\n\n        <div class="col-md-auto col-lg-5 col-sm-9">\n\n          <div class="blocks2">\n\n            <div id="imgBlock">\n\n              <img id="thisImg" src="https://cdn01.masterstudies.com/gfx/image/listing-page/22/main/Medicina-Veterinaria.jpg">\n\n            </div>\n\n          </div>\n\n          img: 450x230px\n\n        </div>\n\n        <!--End Col1-->\n\n        <div class="col col-lg-7 col-sm-9">\n\n          <p class="text-justify w-responsive mx-auto mb-5">\n\n            <br>Empresas Productoras, Importadoras y Distribuidoras de Productos Veterinarios y Agrícolas. Las empresas manejan\n\n            la representación de diversas líneas Veterinarias de calidad y está en proceso de comenzar la distribución de\n\n            líneas de productos agrícolas. Se manejan líneas de calidad global reconocida como lo es BAYER (Alemania) y MSD\n\n            (USA), y líneas de calidad regional reconocida como lo son las marcas INVET (Colombia), LAVET (Guatemala), LABIPHARM\n\n            (Guatemala), GAMMA LABORATORIES (El Salvador), ERMA (Colombia), VM (Colombia) VET BRANDS (USA) y SANFER (México)\n\n            entre otros.\n\n            <br>\n\n            <br>La empresa tiene una red de distribución a nivel de todo Honduras, con dos sucursales, una en Tegucigalpa y otra\n\n            en San Pedro Sula, además de distribución por medio de vendedores de ruta alcanzando todo el territorio nacional.\n\n            Además, de la distribución actual, la empresa está desarrollando proyectos para participar en el mercado regional\n\n            de América Central con distribuciones exclusivas regionales.\n\n            <br>\n\n            <br>La empresa atiende las diversas especies productivas del mercado además de las especies de compañía existentes\n\n            en la región. Existe una amplia gama de productos de la mayor calidad que sirven para atender la gran mayoría\n\n            de las necesidades del mercado veterinario y productivo del país.\n\n          </p>\n\n        </div>\n\n        <!--End Col2-->\n\n      </div>\n\n      <!--End Row1: img and info-->\n\n      <div class="row">\n\n        <div class="col align-self-center">\n\n          <div class="tab">\n\n            <button class="tablinks active" (click)="openElement(\'Mision\',1)" id="default">Mision</button>\n\n            <button class="tablinks" (click)="openElement(\'Vision\',1)" id="vision">Vision</button>\n\n            <button class="tablinks" (click)="openElement(\'Valores\',1)" id="valores">Valores</button>\n\n          </div>\n\n\n\n          <!-- Tab content -->\n\n          <div id="Mision" class="tabcontent">\n\n            <h3>Misión</h3>\n\n            <p class="text-left w-responsive mx-auto mb-5">\n\n              Brindar al mercado agropecuario y de mascotas de Honduras y América Central productos, servicios y soluciones de alta calidad\n\n              para el desarrollo adecuado de los animales de compañía, productos pecuarios y agro alimentarios del país,\n\n              promoviendo y manteniendo siempre la seguridad de la comunidad como el valor primordial de la empresa.\n\n            </p>\n\n          </div>\n\n\n\n          <div id="Vision" class="tabcontent">\n\n            <h3>Visión</h3>\n\n            <p>\n\n              Ser una empresa líder en el mercado agropecuario y de mascotas de Honduras y América Central, siendo reconocidos como una\n\n              empresa que represente calidad en todos los productos y servicios que brinde, manteniendo una trayectoria de\n\n              servicio, honestidad, calidad y crecimiento intachable.\n\n            </p>\n\n          </div>\n\n\n\n          <div id="Valores" class="tabcontent">\n\n            <h3>Valores</h3>\n\n            <ul>\n\n              <li>Honestidad</li>\n\n              <li>Servicio</li>\n\n              <li>Responsabilidad</li>\n\n              <li>Transparencia</li>\n\n              <li>Calidad</li>\n\n              <li>Seguridad</li>\n\n            </ul>\n\n          </div>\n\n          <div *ngIf="!getiClicked()">{{openElement(\'Mision\',0)}}</div>\n\n\n\n\n\n        </div>\n\n        <div class="col">\n\n          <div class="wrapper row2">\n\n            <div id="container" class="clear">\n\n              <div id="about-us" class="clear">\n\n                <section id="statements" class="clear">\n\n\n\n                  <div id="skillset">\n\n                    <h2>Companies Skillset !</h2>\n\n                    <ul>\n\n                      <li class="size_20">\n\n                        <strong>Text Here</strong>\n\n                      </li>\n\n                      <!--<li class="size_25"><strong>Text Here - 25%</strong></li>-->\n\n                      <li class="size_30">\n\n                        <strong>Text Here</strong>\n\n                      </li>\n\n                      <!--<li class="size_35"><strong>Text Here - 35%</strong></li>-->\n\n                      <li class="size_40">\n\n                        <strong>Text Here</strong>\n\n                      </li>\n\n                      <!--<li class="size_45"><strong>Text Here - 45%</strong></li>-->\n\n                      <li class="size_50">\n\n                        <strong>Text Here</strong>\n\n                      </li>\n\n                      <!--<li class="size_55"><strong>Text Here - 55%</strong></li>-->\n\n                      <li class="size_60">\n\n                        <strong>Text Here</strong>\n\n                      </li>\n\n                      <!--<li class="size_65"><strong>Text Here - 65%</strong></li>-->\n\n                      <li class="size_70">\n\n                        <strong>Text Here</strong>\n\n                      </li>\n\n                      <!--<li class="size_75"><strong>Text Here - 75%</strong></li>-->\n\n                      <li class="size_80">\n\n                        <strong>Text Here</strong>\n\n                      </li>\n\n                      <!--<li class="size_85"><strong>Text Here - 85%</strong></li>-->\n\n                      <li class="size_90">\n\n                        <strong>Text Here</strong>\n\n                      </li>\n\n                      <!--<li class="size_95"><strong>Text Here - 95%</strong></li>-->\n\n                      <li class="size_100">\n\n                        <strong>Text Here - 100%</strong>\n\n                      </li>\n\n                    </ul>\n\n                  </div>\n\n                </section>\n\n\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <!--End Col 2-->\n\n      </div>\n\n      <!--End Row2-->\n\n      <br>\n\n    </div>\n\n    <!--End Container-->\n\n\n\n\n\n\n\n  </div>\n\n  <!--End main container-->\n\n  <div class="footer-distributed">\n\n    <div class="footer-left">\n\n\n\n      <h3>Distribuidora\n\n        <span>Realva</span>\n\n      </h3>\n\n\n\n      <p class="footer-links">\n\n        <a href="#">Inicio</a>\n\n        ·\n\n        <a href="#">Productos</a>\n\n        ·\n\n        <a href="#">Nosotros</a>\n\n        ·\n\n        <a href="#">Contacto</a>\n\n        ·\n\n        <a href="#">Descargas</a>\n\n      </p>\n\n\n\n      <p class="footer-company-name">Realva &copy; 2018</p>\n\n    </div>\n\n\n\n    <div class="footer-center">\n\n\n\n      <div>\n\n        <i class="fa fa-map-marker"></i>\n\n        <p>\n\n          <span>\n\n            Edificio Alvarenga, Boulevard Morazán.</span> Tegucigalpa, Honduras</p>\n\n      </div>\n\n\n\n      <div>\n\n        <i class="fa fa-phone"></i>\n\n        <p> +(504) 2236-5531 / 2236-5902 / 2236-8719</p>\n\n      </div>\n\n\n\n      <div>\n\n        <i class="fa fa-envelope"></i>\n\n        <p>\n\n          <a href="mailto:support@company.com">info@realva.com</a>\n\n        </p>\n\n      </div>\n\n\n\n    </div>\n\n\n\n    <div class="footer-right">\n\n\n\n      <p class="footer-company-about">\n\n        <span>Acerca de Nosotros</span>\n\n        Empresas Productoras, Importadoras y Distribuidoras de Productos Veterinarios y Agrícolas. Las empresas manejan la representación\n\n        de diversas líneas Veterinarias de calidad y está en proceso de comenzar la distribución de líneas de productos agrícolas.\n\n      </p>\n\n\n\n      <div class="footer-icons">\n\n\n\n        <a href="https://www.facebook.com/RealvaHonduras/">\n\n          <i class="fa fa-facebook"></i>\n\n        </a>\n\n        <a href="#">\n\n          <i class="fa fa-twitter"></i>\n\n        </a>\n\n        <a href="#">\n\n          <i class="fa fa-linkedin"></i>\n\n        </a>\n\n        <a href="#">\n\n          <i class="fa fa-youtube"></i>\n\n        </a>\n\n        <a href="#">\n\n          <i class="fa fa-instagram"></i>\n\n        </a>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_login_register_login_register__["a" /* LoginRegisterProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_login_register_login_register__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(41);
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
        this.main = "Tegucigalpa";
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
            if (this.http.post("api/form/f93deaf0-cbd9-55d8-828d-434c341ed019/form-response", this.Data).subscribe() != null) {
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\contact\contact.html"*/'<ion-header>\n\n  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"\n\n    crossorigin="anonymous">\n\n    <ion-navbar hide-nav-bar="false">\n\n      <app-header></app-header>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-toolbar no-border end>\n\n    <ion-segment [(ngModel)]="main">\n\n      <ion-segment-button value="Tegucigalpa">\n\n        Tegucigalpa\n\n      </ion-segment-button>\n\n      <ion-segment-button value="San Pedro Sula">\n\n          San Pedro Sula\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n\n\n  </ion-toolbar>\n\n  <div [ngSwitch]="main">\n\n    <div *ngSwitchCase="\'Tegucigalpa\'">\n\n      <div class="Contact">\n\n        <h1>Contacto - Tegucigalpa</h1>\n\n        <div class="maps-location">\n\n          <iframe allowfullscreen="" frameborder="0" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.6069125744443!2d-87.18652868532534!3d14.100366790122589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2d8da2100d3%3A0xb4d71a25f87cfdc2!2sAgropecuaria+Realva!5e0!3m2!1sen!2shn!4v1527009401267"\n\n            style="border:0" width="100%"></iframe>\n\n        </div>\n\n        <div>\n\n          <h2>Nuestra Ubicación</h2>\n\n          <div class="row">\n\n            <div class="col-sm-3 col">\n\n              <strong>Distribuidora REALVA e INDUSTRIA VETERINARIA S. de R.L.</strong>\n\n              <br>\n\n              <address>\n\n                Edificio Alvarenga, Boulevard Morazán Contiguo Paso Desnivel Las Lomas, Tegucigalpa, Honduras.\n\n              </address>\n\n            </div>\n\n            <div class="col-sm-3 col">\n\n              <strong>Teléfonos</strong>\n\n              <br> +(504) 2236-5531 / 2236-5902 / 2236-8719\n\n              <br>\n\n              <br>\n\n              <strong>Correos</strong>\n\n              <br>\n\n              <a href="mailto:info@realva.com" target="_top">info@realva.com</a>\n\n              <br>\n\n              <br>\n\n            </div>\n\n          </div>\n\n        </div>\n\n\n\n        <h2>Formulario de Contacto </h2>\n\n        <form [formGroup]="contactForm" (ngSubmit)="post()">\n\n          <fieldset>\n\n            <div class="form-group required">\n\n              <div class="">\n\n                <label class="control-label" for="input-name">Tu Nombre:</label>\n\n                <input type="text" class="form-control" [(ngModel)]="Data.username" name="username" formControlName="username"\n\n                  (keypress)="onKeyUp($event)" (keyup)="onKeyUp($event)" min="10" max="32" required>\n\n              </div>\n\n            </div>\n\n            <div class="form-group required">\n\n              <div class="">\n\n                <label class="control-label" for="input-email">Correo Electrónico:</label>\n\n                <input type="text" class="form-control" [(ngModel)]="Data.email" name="email" formControlName="email"\n\n                  required ngModel email>\n\n              </div>\n\n            </div>\n\n            <div class="form-group required">\n\n              <div class="">\n\n                <label class="control-label" for="input-enquiry">Mensaje:</label>\n\n                <textarea rows="10" id="input-enquiry" class="form-control" [(ngModel)]="Data.message" name="message"\n\n                  formControlName="message" min="10" max="3000" required></textarea>\n\n              </div>\n\n            </div>\n\n          </fieldset>\n\n          <div class="buttonsContacto">\n\n            <div class="pull-right">\n\n              <input class="buttonLoco" type="submit" value="Enviar">\n\n            </div>\n\n          </div>\n\n        </form>\n\n      </div>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'San Pedro Sula\'">\n\n        <div class="Contact">\n\n          <h1>Contacto - San Pedro Sula</h1>\n\n          <div class="maps-location">\n\n            <iframe allowfullscreen="" frameborder="0" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.757990475741!2d-88.02877198530749!3d15.49744438923633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI5JzUwLjgiTiA4OMKwMDEnMzUuNyJX!5e0!3m2!1ses!2shn!4v1535656815051"\n\n              style="border:0" width="100%"></iframe>\n\n          </div>\n\n          <div>\n\n            <h2>Nuestra Ubicación</h2>\n\n            <div class="row">\n\n              <div class="col-sm-3 col">\n\n                <strong>Distribuidora REALVA e INDUSTRIA VETERINARIA S. de R.L.</strong>\n\n                <br>\n\n                <address>\n\n                  Avenida Lempira, Contiguo al Ministerio Público.\n\n                </address>\n\n              </div>\n\n              <div class="col-sm-3 col">\n\n                <strong>Teléfonos</strong>\n\n                <br> +(504) 2552-9466\n\n                <br>\n\n                <br>\n\n                <strong>Correos</strong>\n\n                <br>\n\n                <a href="mailto:info@realva.com" target="_top">info@realva.com</a>\n\n                <br>\n\n                <br>\n\n              </div>\n\n            </div>\n\n          </div>\n\n  \n\n          <h2>Formulario de Contacto </h2>\n\n          <form [formGroup]="contactForm" (ngSubmit)="post()">\n\n            <fieldset>\n\n              <div class="form-group required">\n\n                <div class="">\n\n                  <label class="control-label" for="input-name">Tu Nombre:</label>\n\n                  <input type="text" class="form-control" [(ngModel)]="Data.username" name="username" formControlName="username"\n\n                    (keypress)="onKeyUp($event)" (keyup)="onKeyUp($event)" min="10" max="32" required>\n\n                </div>\n\n              </div>\n\n              <div class="form-group required">\n\n                <div class="">\n\n                  <label class="control-label" for="input-email">Correo Electrónico:</label>\n\n                  <input type="text" class="form-control" [(ngModel)]="Data.email" name="email" formControlName="email"\n\n                    required ngModel email>\n\n                </div>\n\n              </div>\n\n              <div class="form-group required">\n\n                <div class="">\n\n                  <label class="control-label" for="input-enquiry">Mensaje:</label>\n\n                  <textarea rows="10" id="input-enquiry" class="form-control" [(ngModel)]="Data.message" name="message"\n\n                    formControlName="message" min="10" max="3000" required></textarea>\n\n                </div>\n\n              </div>\n\n            </fieldset>\n\n            <div class="buttonsContacto">\n\n              <div class="pull-right">\n\n                <input class="buttonLoco" type="submit" value="Enviar">\n\n              </div>\n\n            </div>\n\n          </form>\n\n        </div>\n\n      </div>\n\n  </div>\n\n  \n\n  <div class="footer-distributed">\n\n      <div class="footer-left">\n\n\n\n        <h3>Distribuidora\n\n          <span>Realva</span>\n\n        </h3>\n\n\n\n        <p class="footer-links">\n\n          <a href="#">Inicio</a>\n\n          ·\n\n          <a href="#">Productos</a>\n\n          ·\n\n          <a href="#">Nosotros</a>\n\n          ·\n\n          <a href="#">Contacto</a>\n\n          ·\n\n          <a href="#">Descargas</a>\n\n        </p>\n\n\n\n        <p class="footer-company-name">Realva &copy; 2018</p>\n\n      </div>\n\n\n\n      <div class="footer-center">\n\n\n\n        <div>\n\n          <i class="fa fa-map-marker"></i>\n\n          <p>\n\n            <span>\n\n              Edificio Alvarenga, Boulevard Morazán.</span> Tegucigalpa, Honduras</p>\n\n        </div>\n\n\n\n        <div>\n\n          <i class="fa fa-phone"></i>\n\n          <p> +(504) 2236-5531 / 2236-5902 / 2236-8719</p>\n\n        </div>\n\n\n\n        <div>\n\n          <i class="fa fa-envelope"></i>\n\n          <p>\n\n            <a href="mailto:support@company.com">info@realva.com</a>\n\n          </p>\n\n        </div>\n\n\n\n      </div>\n\n\n\n      <div class="footer-right">\n\n\n\n        <p class="footer-company-about">\n\n          <span>Acerca de Nosotros</span>\n\n          Empresas Productoras, Importadoras y Distribuidoras de Productos Veterinarios y Agrícolas. Las empresas\n\n          manejan la representación\n\n          de diversas líneas Veterinarias de calidad y está en proceso de comenzar la distribución de líneas de\n\n          productos\n\n          agrícolas.\n\n        </p>\n\n\n\n        <div class="footer-icons">\n\n\n\n          <a href="https://www.facebook.com/RealvaHonduras/">\n\n            <i class="fa fa-facebook"></i>\n\n          </a>\n\n          <a href="#">\n\n            <i class="fa fa-twitter"></i>\n\n          </a>\n\n          <a href="#">\n\n            <i class="fa fa-linkedin"></i>\n\n          </a>\n\n          <a href="#">\n\n            <i class="fa fa-youtube"></i>\n\n          </a>\n\n          <a href="#">\n\n            <i class="fa fa-instagram"></i>\n\n          </a>\n\n\n\n        </div>\n\n      </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_login_register_login_register__["a" /* LoginRegisterProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_register_login_register__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__showproduct_showproduct__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global_global__ = __webpack_require__(94);
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
    function ProductPage(global, navCtrl, LoginRegister, afDatabase, afAuth) {
        var _this = this;
        this.global = global;
        this.navCtrl = navCtrl;
        this.LoginRegister = LoginRegister;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.login = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
        this.register = __WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */];
        this.Admin = __WEBPACK_IMPORTED_MODULE_5__admin_admin__["a" /* AdminPage */];
        this.Profile = __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */];
        this.cotizaciones = new Array();
        this.mostrarList = [];
        this.filt = [];
        this.filtLab = "";
        this.filtTec = "";
        this.ListaFiltTec = [];
        this.filterRef = afDatabase.database.ref('productos');
        this.filterRef.on('value', function (productList) {
            var productos = [];
            productList.forEach(function (usuario) {
                productos.push(usuario.val());
                return false;
            });
            _this.filterList = productos;
            _this.loadedfilterList = productos;
            _this.mostrarList = [];
            _this.ListaFiltTec = [];
        });
        console.log(this.filterList);
    }
    ProductPage.prototype.ionViewDidLoad = function () {
        if (this.filt.length > 0) {
            this.getItemsCheckMin();
        }
        if (this.filtLab != "") {
            this.getItemsCheckLabMin(this.filtLab);
        }
        if (this.filtTec != "") {
            this.getItemsCheckMinTec(this.filtTec);
        }
    };
    ProductPage.prototype.cotizando = function (c) {
        if (this.global.cotizaciones.length == 0) {
            this.global.cotizaciones.push(c);
        }
        else {
            for (var i = 0; i < this.global.cotizaciones.length; i++) {
                if (this.global.cotizaciones[i] == c) {
                    break;
                }
                if (i == this.global.cotizaciones.length - 1 && this.global.cotizaciones != c) {
                    this.global.cotizaciones.push(c);
                }
            }
        }
    };
    ProductPage.prototype.push = function (p) {
        var refpo = this.afDatabase.database.ref('productos');
        var update = this.afDatabase.list('productos');
        refpo.orderByChild('codigo').equalTo(p.codigo)
            .once('value').then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                update.update(childSnapshot.key, { visita: childSnapshot.val().visita + 1 });
            });
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__showproduct_showproduct__["a" /* ShowproductPage */], { productoEntrada: p });
    };
    ProductPage.prototype.initializeItems = function () {
        var _this = this;
        this.filterRef.on('value', function (productList) {
            var productos = [];
            productList.forEach(function (usuario) {
                productos.push(usuario.val());
                return false;
            });
            _this.filterList = productos;
            _this.loadedfilterList = productos;
        });
        this.filterList = this.loadedfilterList;
        this.mostrarList = [];
        this.ListaFiltTec = [];
    };
    ProductPage.prototype.highlightMe = function (information) {
        if (information == 1) {
            if (document.getElementById("test").className.indexOf("collapsed") != -1) {
                document.getElementById("test").className = "active";
                //document.getElementById("ut").className = "";
                //document.getElementById("lab").className = "";
            }
            else {
                document.getElementById("test").className = "";
            }
        }
        if (information == 2) {
            if (document.getElementById("ut").className.indexOf("collapsed") != -1) {
                //document.getElementById("test").className = "";
                document.getElementById("ut").className = "active";
                //document.getElementById("lab").className = "";
            }
            else {
                document.getElementById("ut").className = "";
            }
        }
        if (information == 3) {
            if (document.getElementById("lab").className.indexOf("collapsed") != -1) {
                //document.getElementById("test").className = "";
                //document.getElementById("ut").className = "";
                document.getElementById("lab").className = "active";
            }
            else {
                document.getElementById("lab").className = "";
            }
        }
    };
    ProductPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.filterList = this.filterList.filter(function (v) {
            if (v.nombre && q) {
                if (v.nombre.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    ProductPage.prototype.getItemsCheckTec = function (searchbar) {
        var _this = this;
        var q = searchbar.target.value;
        // Reset items back to all of the items
        this.initializeItems();
        if (this.filt.length > 0 || this.filtLab != "") {
            if (this.filt.length > 0) {
                this.getItemsCheckMin();
            }
            if (this.filtLab != "") {
                this.getItemsCheckLabMin(this.filtLab);
            }
        }
        // if the value is an empty string don't filter the items
        if (!q || !searchbar.target.checked) {
            this.filtTec = "";
            return;
        }
        if (searchbar.target.checked) {
            this.filtTec = searchbar.target.value;
        }
        this.filterList.filter(function (v) {
            if (v.unidTec) {
                if (v.unidTec.indexOf(q.toUpperCase()) > -1) {
                    console.log('Entro');
                    if (_this.ListaFiltTec.indexOf(v) == -1) {
                        _this.ListaFiltTec.push(v);
                    }
                    return true;
                }
                return false;
            }
        });
        this.filterList = this.ListaFiltTec;
    };
    ProductPage.prototype.getItemsCheckLab = function (searchbar) {
        var q = searchbar.target.value;
        // Reset items back to all of the items
        this.initializeItems();
        if (this.filt.length > 0 || this.filtTec != "") {
            if (this.filt.length > 0) {
                this.getItemsCheckMin();
            }
            if (this.filtTec != "") {
                this.getItemsCheckMinTec(this.filtTec);
            }
        }
        // if the value is an empty string don't filter the items
        if (!q || !searchbar.target.checked) {
            this.filtLab = "";
            return;
        }
        if (searchbar.target.checked) {
            this.filtLab = searchbar.target.value;
        }
        this.filterList = this.filterList.filter(function (v) {
            if (v.laboratorio && q) {
                if (v.laboratorio == q) {
                    return true;
                }
                return false;
            }
        });
    };
    ProductPage.prototype.getItemsCheck = function (searchbar) {
        var _this = this;
        var q = searchbar.target.value;
        // Reset items back to all of the items
        if (this.filt.length > 0 && !searchbar.target.checked) {
            var borrar = this.filt.findIndex(function (k) { return k == q; });
            this.filt.splice(borrar, 1);
        }
        this.initializeItems();
        if (this.filtTec != "" || this.filtLab != "") {
            if (this.filtLab != "") {
                this.getItemsCheckLabMin(this.filtLab);
            }
            if (this.filtTec != "") {
                this.getItemsCheckMinTec(this.filtTec);
            }
        }
        // if the value is an empty string don't filter the items
        if (this.filt.length == 0) {
            if (!q || !searchbar.target.checked) {
                return;
            }
        }
        if (searchbar.target.checked) {
            this.filt.push(q);
        }
        var _loop_1 = function (iterator) {
            this_1.filterList.filter(function (v) {
                if (v.especie && _this.filt.length > 0) {
                    if (v.especie.indexOf(iterator.toUpperCase()) > -1) {
                        if (_this.mostrarList.indexOf(v) == -1) {
                            _this.mostrarList.push(v);
                        }
                        return true;
                    }
                    return false;
                }
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.filt; _i < _a.length; _i++) {
            var iterator = _a[_i];
            _loop_1(iterator);
        }
        this.filterList = this.mostrarList;
    };
    ProductPage.prototype.getItemsCheckMinTec = function (searchbar) {
        var _this = this;
        var q = searchbar;
        // Reset items back to all of the items
        this.ListaFiltTec = [];
        this.filterList.filter(function (v) {
            if (v.unidTec) {
                console.log(v.unidTec.indexOf(q.toUpperCase()));
                if (v.unidTec.indexOf(q.toUpperCase()) > -1) {
                    if (_this.ListaFiltTec.indexOf(v) == -1) {
                        _this.ListaFiltTec.push(v);
                    }
                    return true;
                }
                return false;
            }
        });
        this.filterList = this.ListaFiltTec;
    };
    ProductPage.prototype.getItemsCheckLabMin = function (searchbar) {
        var q = searchbar;
        this.filterList = this.filterList.filter(function (v) {
            if (v.laboratorio && q) {
                if (v.laboratorio == q) {
                    return true;
                }
                return false;
            }
        });
    };
    ProductPage.prototype.getItemsCheckMin = function () {
        var _this = this;
        this.mostrarList = [];
        var _loop_2 = function (iterator) {
            this_2.filterList.filter(function (v) {
                if (v.especie && _this.filt.length > 0) {
                    if (v.especie.indexOf(iterator.toUpperCase()) > -1) {
                        if (_this.mostrarList.indexOf(v) == -1) {
                            _this.mostrarList.push(v);
                        }
                        return true;
                    }
                    return false;
                }
            });
        };
        var this_2 = this;
        for (var _i = 0, _a = this.filt; _i < _a.length; _i++) {
            var iterator = _a[_i];
            _loop_2(iterator);
        }
        this.filterList = this.mostrarList;
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\product\product.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons end>\n\n      <app-header></app-header>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="container">\n\n    <div class="row mt-3">\n\n        <div class="col col-lg-3 col-md-3 col-sm-12 col-12 mt-2">\n\n          <h1>Categorias</h1>\n\n          <div class="nav-side-menu">\n\n            <div class="brand">Realva</div>\n\n            <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>\n\n\n\n                <div class="menu-list">\n\n\n\n                    <ul id="menu-content" class="menu-content collapse out">\n\n\n\n                        <li  data-toggle="collapse" data-target="#especies" id="test" class="collapsed" (click)="highlightMe(1)">\n\n                          <a href="#"><i class="fa fa-paw fa-lg"></i> Especies <span class="arrow"></span></a>\n\n                        </li>\n\n                        <ul class="sub-menu collapse" id="especies">\n\n                            <li><label class="myLabel"><input id="Caninos" type="checkbox" value="CANINOS" (change)="getItemsCheck($event)">Caninos</label></li>\n\n                            <li><label class="myLabel"><input id="Bovinos" type="checkbox" value="BOVINOS" (change)="getItemsCheck($event)">Bovinos</label></li>\n\n                            <li><label class="myLabel"><input id="Equinos" type="checkbox" value="EQUINOS" (change)="getItemsCheck($event)">Equinos</label></li>\n\n                            <li><label class="myLabel"><input id="Ovinos" type="checkbox" value="OVINOS" (change)="getItemsCheck($event)">Ovinos</label></li>\n\n                            <li><label class="myLabel"><input id="Caprinos" type="checkbox" value="CAPRINOS" (change)="getItemsCheck($event)">Caprinos</label></li>\n\n                            <li><label class="myLabel"><input id="Felinos" type="checkbox" value="FELINOS" (change)="getItemsCheck($event)">Felinos</label></li>\n\n                            <li><label class="myLabel"><input id="Zorros" type="checkbox" value="ZORROS" (change)="getItemsCheck($event)">Zorros</label></li>\n\n                            <li><label class="myLabel"><input id="Hurones" type="checkbox" value="HURONES" (change)="getItemsCheck($event)">Hurones</label></li>\n\n                            <li><label class="myLabel"><input id="Todas Especies" type="checkbox" value="TODAS ESPECIES" (change)="getItemsCheck($event)">Todas Especies</label></li>\n\n                            <li><label class="myLabel"><input id="Porcinos" type="checkbox" value="PORCINOS" (change)="getItemsCheck($event)">Porcinos</label></li>\n\n                            <li><label class="myLabel"><input id="Conejos" type="checkbox" value="CONEJOS" (change)="getItemsCheck($event)">Conejos</label></li>\n\n                            <li><label class="myLabel"><input id="Aves de Engorde" type="checkbox" value="AVES DE ENGORDE" (change)="getItemsCheck($event)">Aves de Engorde</label></li>\n\n                            <li><label class="myLabel"><input id="Aves de Postura" type="checkbox" value="AVES DE POSTURA" (change)="getItemsCheck($event)">Aves de Postura</label></li>\n\n                            <li><label class="myLabel"><input id="Aves de Traspatio" type="checkbox" value="AVES DE TRASPATIO" (change)="getItemsCheck($event)">Aves de Traspatio</label></li>\n\n                            <li><label class="myLabel"><input id="Pavos" type="checkbox" value="PAVOS" (change)="getItemsCheck($event)">Pavos</label></li>\n\n                            <li><label class="myLabel"><input id="Gallos de Pelea" type="checkbox" value="Gallos de Pelea" (change)="getItemsCheck($event)">Gallos de Pelea</label></li>\n\n                            <li><label class="myLabel"><input id="Aves" type="checkbox" value="AVES" (change)="getItemsCheck($event)">Aves</label></li>\n\n                           \n\n                        </ul>\n\n\n\n\n\n                        <li data-toggle="collapse" data-target="#unidadTecnica" id="ut" class="collapsed" (click)="highlightMe(2)">\n\n                          <a href="#"><i class="fa fa-globe fa-lg"></i> Unidad Técnica <span class="arrow"></span></a>\n\n                        </li>\n\n                        <ul class="sub-menu collapse" id="unidadTecnica">\n\n                          <li><label class="myLabel"><input id="Animales de Produccion" *ngIf="filtTec == \'\' || filtTec == \'ANIMALES DE PRODUCCIÓN\' " type="checkbox" value="ANIMALES DE PRODUCCIÓN" (change)="getItemsCheckTec($event)">Animales de Producción</label></li>\n\n                          <li> <label class="myLabel"><input id="Animales de Compañia" *ngIf="filtTec == \'\' || filtTec == \'ANIMALES DE COMPAÑÍA\' " type="checkbox" value="ANIMALES DE COMPAÑÍA" (change)="getItemsCheckTec($event)">Animales de Compañía</label></li>\n\n                        </ul>\n\n\n\n\n\n                        <li data-toggle="collapse" data-target="#laboratorio" id="lab" class="collapsed" (click)="highlightMe(3)">\n\n                          <a href="#"><i class="fa fa-flask fa-lg"></i> Laboratorio <span class="arrow"></span></a>\n\n                        </li>\n\n                        <ul class="sub-menu collapse" id="laboratorio">\n\n                          \n\n                          <li><label class="myLabel"><input id="LAVET" *ngIf="filtLab == \'\' || filtLab == \'LAVET\' " type="checkbox" value="LAVET" (change)="getItemsCheckLab($event)">LAVET</label></li>\n\n                            <li><label class="myLabel"><input id="LABIPHARM" *ngIf="filtLab == \'\' || filtLab == \'LABIPHARM\' " type="checkbox" value="LABIPHARM" (change)="getItemsCheckLab($event)">LABIPHARM</label></li>\n\n                              <li><label class="myLabel"><input id="INVET"  *ngIf="filtLab == \'\' || filtLab == \'INVET\' "type="checkbox" value="INVET" (change)="getItemsCheckLab($event)">INVET</label></li>\n\n                                <li><label class="myLabel"><input id="LABORATORIOS VM"  *ngIf="filtLab == \'\' || filtLab == \'LABORATORIOS VM\' " type="checkbox" value="LABORATORIOS VM" (change)="getItemsCheckLab($event)">LABORATORIOS VM</label></li>\n\n                                  <li><label class="myLabel"><input id="SCHIPPERS - VET BRANDS" *ngIf="filtLab == \'\' || filtLab == \'SCHIPPERS - VET BRANDS\' " type="checkbox" value="SCHIPPERS - VET BRANDS" (change)="getItemsCheckLab($event)">SCHIPPERS - VET BRANDS</label></li>\n\n                                    <li><label class="myLabel"><input id="ERMA" type="checkbox"  *ngIf="filtLab == \'\' || filtLab == \'ERMA\' "value="ERMA" (change)="getItemsCheckLab($event)">ERMA</label></li>\n\n                                      <li><label class="myLabel"><input id="GAMMA" type="checkbox"  *ngIf="filtLab == \'\' || filtLab == \'GAMMA\' "value="GAMMA" (change)="getItemsCheckLab($event)">GAMMA</label></li>\n\n                                        <li><label class="myLabel"><input id="MSD - ANIMAL HEALTH"  *ngIf="filtLab == \'\' || filtLab == \'MSD - ANIMAL HEALTH\' "type="checkbox" value="MSD - ANIMAL HEALTH" (change)="getItemsCheckLab($event)">MSD - ANIMAL HEALTH</label></li>\n\n                        </ul>\n\n                    </ul>\n\n             </div>\n\n        </div>\n\n        </div>\n\n        <div class="col col-lg-9 col-md-9 col-sm-12 col-12 mt-2">\n\n            <h1>Productos</h1>\n\n            <div class="well well-sm">\n\n                <strong>Tipo de Vista</strong>\n\n                <div class="btn-group">\n\n                    <a href="#" id="list" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-th-list">\n\n                    </span>Lista</a> <a href="#" id="grid" class="btn btn-default btn-sm"><span\n\n                        class="glyphicon glyphicon-th"></span>Cuadros</a>\n\n                </div>\n\n            </div>\n\n            <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n            <div id="products" class="row grid-group">\n\n                <div class="item  col-xs-4 col-lg-4" *ngFor=\'let producto of filterList \'>\n\n                    <div class="thumbnail">\n\n                        <img class="group grid-group-image" src={{producto.imagen}} alt="">\n\n                        <div class="caption">\n\n                            <h4 class="group inner grid-group-item-heading">\n\n                                {{producto.nombre}}\n\n                            </h4>\n\n                            <div class="row">\n\n                                <div class="col-xs-12 col-md-6">\n\n                                    <p class="lead" *ngIf="LoginRegister.userLogged != null">\n\n                                        Precio: L. {{producto.precio}}</p>\n\n                                </div>\n\n                                <div class="col-xs-12 col-md-6">\n\n                                    <a class="btn btn-success" (click)="push(producto)">Mirar</a>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n\n            </div>\n\n\n\n        </div>\n\n    </div>\n\n\n\n  </div>\n\n  <div class="container">\n\n\n\n  </div>\n\n\n\n  <div class="footer-distributed">\n\n    <div class="footer-left">\n\n\n\n      <h3>Distribuidora\n\n        <span>Realva</span>\n\n      </h3>\n\n\n\n      <p class="footer-links">\n\n        <a href="#">Inicio</a>\n\n        ·\n\n        <a href="#">Productos</a>\n\n        ·\n\n        <a href="#">Nosotros</a>\n\n        ·\n\n        <a href="#">Contacto</a>\n\n        ·\n\n        <a href="#">Descargas</a>\n\n      </p>\n\n\n\n      <p class="footer-company-name">Realva &copy; 2018</p>\n\n    </div>\n\n\n\n    <div class="footer-center">\n\n\n\n      <div>\n\n        <i class="fa fa-map-marker"></i>\n\n        <p>\n\n          <span>\n\n            Edificio Alvarenga, Boulevard Morazán.</span> Tegucigalpa, Honduras</p>\n\n      </div>\n\n\n\n      <div>\n\n        <i class="fa fa-phone"></i>\n\n        <p> +(504) 2236-5531 / 2236-5902 / 2236-8719</p>\n\n      </div>\n\n\n\n      <div>\n\n        <i class="fa fa-envelope"></i>\n\n        <p>\n\n          <a href="mailto:support@company.com">info@realva.com</a>\n\n        </p>\n\n      </div>\n\n\n\n    </div>\n\n\n\n    <div class="footer-right">\n\n\n\n      <p class="footer-company-about">\n\n        <span>Acerca de Nosotros</span>\n\n        Empresas Productoras, Importadoras y Distribuidoras de Productos Veterinarios y Agrícolas. Las empresas manejan la representación\n\n        de diversas líneas Veterinarias de calidad y está en proceso de comenzar la distribución de líneas de productos agrícolas.\n\n      </p>\n\n\n\n      <div class="footer-icons">\n\n\n\n        <a href="https://www.facebook.com/RealvaHonduras/">\n\n          <i class="fa fa-facebook"></i>\n\n        </a>\n\n        <a href="#">\n\n          <i class="fa fa-twitter"></i>\n\n        </a>\n\n        <a href="#">\n\n          <i class="fa fa-linkedin"></i>\n\n        </a>\n\n        <a href="#">\n\n            <i class="fa fa-youtube"></i>\n\n          </a>\n\n          <a href="#">\n\n              <i class="fa fa-instagram"></i>\n\n          </a>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\product\product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_login_register_login_register__["a" /* LoginRegisterProvider */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login_register_login_register__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(59);
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
    function DownloadsPage(navCtrl, navParams, LoginRegister, auth, afDatabase, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LoginRegister = LoginRegister;
        this.auth = auth;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.login = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.register = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */];
        this.Admin = __WEBPACK_IMPORTED_MODULE_5__admin_admin__["a" /* AdminPage */];
        this.Profile = __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */];
        this.filterRef = afDatabase.database.ref('descargas');
        this.filterRef.on('value', function (productList) {
            var descargas = [];
            productList.forEach(function (usuario) {
                descargas.push(usuario.val());
                return false;
            });
            _this.filterList = descargas;
            _this.loadedfilterList = descargas;
        });
        console.log(this.filterList);
    }
    DownloadsPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.filterList = this.filterList.filter(function (v) {
            if (v.nombre && q) {
                if (v.nombre.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    DownloadsPage.prototype.initializeItems = function () {
        var _this = this;
        this.filterRef.on('value', function (productList) {
            var descargas = [];
            productList.forEach(function (usuario) {
                descargas.push(usuario.val());
                return false;
            });
            _this.filterList = descargas;
            _this.loadedfilterList = descargas;
        });
        this.filterList = this.loadedfilterList;
    };
    DownloadsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DownloadsPage');
    };
    DownloadsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-downloads',template:/*ion-inline-start:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\downloads\downloads.html"*/'<!--\n\n  Generated template for the DownloadsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"\n\n    crossorigin="anonymous">\n\n  <ion-navbar hide-nav-bar="false">\n\n    <app-header></app-header>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="Downloads">\n\n    <h1>Descargas</h1>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-list>\n\n      <ion-item>\n\n        <div class="row">\n\n          <div class="col-sm-6" *ngFor="let descarga of filterList ">\n\n            <div class="card">\n\n              <div class="card-body">\n\n                <p> {{descarga.nombre}} </p>\n\n                <p class="card-text">Aqui encontrara los productos que actualmente tenemos disponibles.</p>\n\n                <a download href="{{descarga.imagen}}" class="btn btn-primary">Descargar</a>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div class="container">\n\n    <!-- Section: Magazine v.3 -->\n\n    <section class="magazine-section my-5">\n\n\n\n      <!-- Section heading -->\n\n      <h1 class="h1-responsive font-weight-bold text-center my-5">Noticias</h1>\n\n      <!-- Section description -->\n\n      <p class="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse\n\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint\n\n        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit id laborum.</p>\n\n\n\n      <!-- Grid row -->\n\n      <div class="row">\n\n\n\n        <!-- Grid column -->\n\n        <div class="col-lg-4 col-md-12 mb-lg-0 mb-5">\n\n\n\n          <!-- Featured news -->\n\n          <div class="single-news mb-3">\n\n\n\n            <!-- Image -->\n\n            <div class="view overlay rounded z-depth-2 mb-4">\n\n              <img class="img-fluid" src="http://wikifaunia.com/wp-content/uploads/2015/01/cocker-ana.jpg" alt="Sample image">\n\n              <a>\n\n                <div class="mask rgba-white-slight"></div>\n\n              </a>\n\n            </div>\n\n\n\n            <!-- Grid row -->\n\n            <div class="row mb-3">\n\n\n\n              <!-- Grid column -->\n\n              <div class="col-12">\n\n\n\n                <!-- Badge -->\n\n                <a href="#!">\n\n                  <span class="badge pink">\n\n                    <i class="fa fa-paw pr-2" aria-hidden="true"></i>Veterinarias</span>\n\n                </a>\n\n\n\n              </div>\n\n              <!-- Grid column -->\n\n\n\n            </div>\n\n            <!-- Grid row -->\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0 mb-3">\n\n                <a class="font-weight-bold">Animales en Honduras</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Featured news -->\n\n\n\n          <!-- Small news -->\n\n          <div class="single-news mb-3">\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0 mb-3">\n\n                <a>Honduras, único en Centroamérica que forma agentes caninos</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Small news -->\n\n\n\n          <!-- Small news -->\n\n          <div class="single-news mb-3">\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0 mb-3">\n\n                <a>Veterinarios hondureños con vocación a servir a la comunidad</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Small news -->\n\n\n\n          <!-- Small news -->\n\n          <div class="single-news mb-3">\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0 mb-3">\n\n                <a>Conozca la importancia de tener un PLAN de SALUD para su mascota</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Small news -->\n\n\n\n          <!-- Small news -->\n\n          <div class="single-news">\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0">\n\n                <a>Veterinario alerta sobre mortal efecto de la encefalitis equina</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Small news -->\n\n\n\n        </div>\n\n        <!-- Grid column -->\n\n\n\n        <!-- Grid column -->\n\n        <div class="col-lg-4 col-md-6 mb-md-0 mb-5">\n\n\n\n          <!-- Featured news -->\n\n          <div class="single-news mb-3">\n\n\n\n            <!-- Image -->\n\n            <div class="view overlay rounded z-depth-2 mb-4">\n\n              <img class="img-fluid" src="https://i.pinimg.com/736x/d1/2b/5b/d12b5b6581dd8ffd0624fe576a5b93a0--vida-animal-mundo-animal.jpg"\n\n                alt="Sample image">\n\n              <a>\n\n                <div class="mask rgba-white-slight"></div>\n\n              </a>\n\n            </div>\n\n\n\n            <!-- Grid row -->\n\n            <div class="row mb-3">\n\n\n\n              <!-- Grid column -->\n\n              <div class="col-12">\n\n\n\n                <!-- Badge -->\n\n                <a href="#!">\n\n                  <span class="badge deep-orange">\n\n                    <i class="fa fa-kiwi-bird pr-2" aria-hidden="true"></i>Agronomía</span>\n\n                </a>\n\n\n\n              </div>\n\n              <!-- Grid column -->\n\n\n\n            </div>\n\n            <!-- Grid row -->\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0 mb-3">\n\n                <a class="font-weight-bold">Agronomía</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Featured news -->\n\n\n\n          <!-- Small news -->\n\n          <div class="single-news mb-3">\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0 mb-3">\n\n                <a>Inteligencia artificial para ahorrar agua en los regadíos</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Small news -->\n\n\n\n          <!-- Small news -->\n\n          <div class="single-news mb-3">\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0 mb-3">\n\n                <a>Big data y ciencia: los aliados de los agricultores para entender el clima</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Small news -->\n\n\n\n          <!-- Small news -->\n\n          <div class="single-news mb-3">\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0 mb-3">\n\n                <a>Empresa familiar es un modelo de superación con cultivo hidropónico</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Small news -->\n\n\n\n          <!-- Small news -->\n\n          <div class="single-news">\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0">\n\n                <a>Veterinario alerta sobre mortal efecto de la encefalitis equina</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Small news -->\n\n\n\n        </div>\n\n        <!-- Grid column -->\n\n\n\n        <!-- Grid column -->\n\n        <div class="col-lg-4 col-md-6 mb-0">\n\n\n\n          <!-- Featured news -->\n\n          <div class="single-news mb-3">\n\n\n\n            <!-- Image -->\n\n            <div class="view overlay rounded z-depth-2 mb-4">\n\n              <img class="img-fluid" src="https://mediateca.educa.madrid.org/imagen.php?id=smr5fvsqponuqw6i&m=0&ext=.jpg"\n\n                alt="Sample image">\n\n              <a>\n\n                <div class="mask rgba-white-slight"></div>\n\n              </a>\n\n            </div>\n\n\n\n            <!-- Grid row -->\n\n            <div class="row mb-3">\n\n\n\n              <!-- Grid column -->\n\n              <div class="col-12">\n\n\n\n                <!-- Badge -->\n\n                <a href="#!">\n\n                  <span class="badge success-color">\n\n                    <i class="fa fa-leaf pr-2" aria-hidden="true"></i>Otros</span>\n\n                </a>\n\n\n\n              </div>\n\n              <!-- Grid column -->\n\n\n\n            </div>\n\n            <!-- Grid row -->\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0 mb-3">\n\n                <a class="font-weight-bold">Animales en peligro de extinción</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Featured news -->\n\n\n\n          <!-- Small news -->\n\n          <div class="single-news mb-3">\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0 mb-3">\n\n                <a>Mueren 7 rinocerontes negros tras ser trasladados a parque en Kenia</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Small news -->\n\n\n\n          <!-- Small news -->\n\n          <div class="single-news mb-3">\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0 mb-3">\n\n                <a>Uno de los arrecifes más grandes del mundo sale de lista de peligro</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Small news -->\n\n\n\n          <!-- Small news -->\n\n          <div class="single-news mb-3">\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0 mb-3">\n\n                <a>En Honduras hay más de 20 especies en riesgo de extinción.</a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Small news -->\n\n\n\n          <!-- Small news -->\n\n          <div class="single-news">\n\n\n\n            <!-- Title -->\n\n            <div class="d-flex justify-content-between">\n\n              <div class="col-11 text-truncate pl-0">\n\n                <a>La jirafa está en peligro de extinción por pérdida de su hábitat y caza </a>\n\n              </div>\n\n              <a>\n\n                <i class="fa fa-angle-double-right"></i>\n\n              </a>\n\n            </div>\n\n\n\n          </div>\n\n          <!-- Small news -->\n\n\n\n        </div>\n\n        <!-- Grid column -->\n\n\n\n      </div>\n\n      <!-- Grid row -->\n\n\n\n    </section>\n\n    <!-- Section: Magazine v.3 -->\n\n  </div>\n\n  <div class="footer-distributed">\n\n    <div class="footer-left">\n\n\n\n      <h3>Distribuidora\n\n        <span>Realva</span>\n\n      </h3>\n\n\n\n      <p class="footer-links">\n\n        <a href="#">Inicio</a>\n\n        ·\n\n        <a href="#">Productos</a>\n\n        ·\n\n        <a href="#">Nosotros</a>\n\n        ·\n\n        <a href="#">Contacto</a>\n\n        ·\n\n        <a href="#">Descargas</a>\n\n      </p>\n\n\n\n      <p class="footer-company-name">Realva &copy; 2018</p>\n\n    </div>\n\n\n\n    <div class="footer-center">\n\n\n\n      <div>\n\n        <i class="fa fa-map-marker"></i>\n\n        <p>\n\n          <span>\n\n            Edificio Alvarenga, Boulevard Morazán.</span> Tegucigalpa, Honduras</p>\n\n      </div>\n\n\n\n      <div>\n\n        <i class="fa fa-phone"></i>\n\n        <p> +(504) 2236-5531 / 2236-5902 / 2236-8719</p>\n\n      </div>\n\n\n\n      <div>\n\n        <i class="fa fa-envelope"></i>\n\n        <p>\n\n          <a href="mailto:support@company.com">info@realva.com</a>\n\n        </p>\n\n      </div>\n\n\n\n    </div>\n\n\n\n    <div class="footer-right">\n\n\n\n      <p class="footer-company-about">\n\n        <span>Acerca de Nosotros</span>\n\n        Empresas Productoras, Importadoras y Distribuidoras de Productos Veterinarios y Agrícolas. Las empresas manejan\n\n        la representación\n\n        de diversas líneas Veterinarias de calidad y está en proceso de comenzar la distribución de líneas de productos\n\n        agrícolas.\n\n      </p>\n\n\n\n      <div class="footer-icons">\n\n\n\n        <a href="https://www.facebook.com/RealvaHonduras/">\n\n          <i class="fa fa-facebook"></i>\n\n        </a>\n\n        <a href="#">\n\n          <i class="fa fa-twitter"></i>\n\n        </a>\n\n        <a href="#">\n\n          <i class="fa fa-linkedin"></i>\n\n        </a>\n\n        <a href="#">\n\n          <i class="fa fa-youtube"></i>\n\n        </a>\n\n        <a href="#">\n\n          <i class="fa fa-instagram"></i>\n\n        </a>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\downloads\downloads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_login_register_login_register__["a" /* LoginRegisterProvider */], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], DownloadsPage);
    return DownloadsPage;
}());

//# sourceMappingURL=downloads.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_login_register_login_register__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile__ = __webpack_require__(41);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function CotizarPage(alertCtrl, http, global, navCtrl, LoginRegister, navParams) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.global = global;
        this.navCtrl = navCtrl;
        this.LoginRegister = LoginRegister;
        this.navParams = navParams;
        this.Data = {};
        this.login = __WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */];
        this.register = __WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */];
        this.Admin = __WEBPACK_IMPORTED_MODULE_8__admin_admin__["a" /* AdminPage */];
        this.Profile = __WEBPACK_IMPORTED_MODULE_9__profile_profile__["a" /* ProfilePage */];
        this.total = 0;
        this.productos = this.global.cotizaciones;
        this.http = http;
        this.contactForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](),
            message: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]
        });
        for (var i = 0; i < global.cotizaciones.length; i++) {
            this.total += global.cotizaciones[i].precio * global.cotizaciones[i].cantidad;
        }
    }
    CotizarPage.prototype.calcularTotal = function (item, valor) {
        var cantidad = valor.target.value;
        var temporal = 0;
        for (var i = 0; i < this.global.cotizaciones.length; i++) {
            if (item.nombre == this.global.cotizaciones[i].nombre && item.precio == this.global.cotizaciones[i].precio) {
                this.global.cotizaciones[i].cantidad = cantidad;
            }
            temporal += this.global.cotizaciones[i].precio * this.global.cotizaciones[i].cantidad;
        }
        this.total = temporal;
    };
    CotizarPage.prototype.post = function () {
        if (this.contactForm.valid) {
            var Total = this.total;
            var salida = __assign({}, this.Data, { Total: Total });
            for (var i = 0; i < this.productos.length; i++) {
                var productoTemporal = { nombre: this.productos[i].nombre, dosis: this.productos[i].dosis, precio: this.productos[i].precio, cantidad: this.productos[i].cantidad };
                salida = __assign({}, salida, productoTemporal);
            }
            if (this.http.post("api/form/c2d427ba-fe70-5f56-b24a-18c1ae07d531/form-response", salida).subscribe() != null) {
                this.contactForm.reset();
                this.presentAlert("Mensaje Enviado", "Su mensaje ha sido enviado con éxito!", "Ok");
            }
        }
        else {
            this.presentAlert("Error", "Ingrese todos sus datos de manera correcta!", "Ok");
        }
    };
    CotizarPage.prototype.presentAlert = function (Title, SubTitle, Button) {
        var alert = this.alertCtrl.create({
            title: Title,
            subTitle: SubTitle,
            buttons: [Button]
        });
        alert.present();
    };
    CotizarPage.prototype.onKeyUp = function (event) {
        var newValue = event.target.value;
        var regExp = new RegExp('^[A-ZaÑñÁÉÍÓÚáéíóú,a-z, ]+$');
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
    };
    CotizarPage.prototype.eliminar = function (p) {
        var index = this.global.cotizaciones.indexOf(p);
        if (index > -1) {
            this.global.cotizaciones.splice(index, 1);
        }
        var temporal = 0;
        for (var i = 0; i < this.global.cotizaciones.length; i++) {
            temporal += this.global.cotizaciones[i].precio * this.global.cotizaciones[i].cantidad;
        }
        this.total = temporal;
    };
    CotizarPage.prototype.limpiar = function () {
        this.global.cotizaciones = [];
        this.productos = this.global.cotizaciones;
        this.total = 0;
    };
    CotizarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cotizar',template:/*ion-inline-start:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\cotizar\cotizar.html"*/'<!--\n\n  Generated template for the ShowproductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Regresar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div class="container">\n\n    <div class="card">\n\n      <div class="card-header bg-secondary text-light">\n\n        <i class="fa fa-shopping-cart" aria-hidden="true"></i>\n\n        Cotizacion\n\n        <div class="clearfix"></div>\n\n      </div>\n\n      <div class="card-body">\n\n\n\n        <div class="row" *ngFor="let producto of productos">\n\n          <div class="col-xs-2 col-md-2 mt-2">\n\n            <img class="img-responsive" src={{producto.imagen}} alt="prewiew">\n\n          </div>\n\n          <div class="col-xs-4 col-md-6 mt-2">\n\n            <h4 class="product-name">\n\n              <strong>{{producto["nombre"]}}</strong>\n\n            </h4>\n\n            <h4>\n\n              <small><b>Dosis: {{producto["dosis"]}}</b></small>\n\n              <br>\n\n              <small>{{producto["descripcion"]}}</small>\n\n            </h4>\n\n          </div>\n\n          <div class="col-xs-6 col-md-4 row">\n\n            <div class="col-xs-6 col-md-6 text-right" style="padding-top: 5px">\n\n              <h6>\n\n                <strong>Precio: Lps {{producto["precio"]}}\n\n                  <span class="text-muted">x</span>\n\n                </strong>\n\n              </h6>\n\n            </div>\n\n            <div class="col-xs-4 col-md-4">\n\n              <input type="number" class="form-control input-sm" min="1" value={{producto.cantidad}} (change)="calcularTotal(producto, $event)">\n\n            </div>\n\n            <div class="col-xs-2 col-md-2">\n\n              <button href="#" type="button" (click)="eliminar(producto)" class="btn btn-outline-danger btn-xs">\n\n                <i class="fa fa-trash" aria-hidden="true"></i>\n\n              </button>\n\n            </div>\n\n          </div>\n\n          <div class=\'col-lg-8 col-lg-offset-2\'>\n\n            <hr>\n\n          </div>\n\n        </div>\n\n        <p class="text-right"><b>Total: </b>{{total}}</p>\n\n        <hr>\n\n        <div class="pull-right">\n\n          <a href="#" (click)="limpiar()" class="btn btn-outline-secondary pull-right">Limpiar</a>\n\n        </div>\n\n      </div>\n\n      <div class="card-footer">\n\n          <form [formGroup]="contactForm" (ngSubmit)="post()">\n\n              <fieldset>\n\n                <div class="form-group required">\n\n                  <div class="">\n\n                    <label class="control-label" for="input-name">Tu Nombre:</label>\n\n                    <input type="text" class="form-control" [(ngModel)]="Data.username" name="username" formControlName="username" (keypress)="onKeyUp($event)"\n\n                      (keyup)="onKeyUp($event)" min="10" max="32" required>\n\n                  </div>\n\n                </div>\n\n                <div class="form-group required">\n\n                  <div class="">\n\n                    <label class="control-label" for="input-email">Correo Electrónico:</label>\n\n                    <input type="text" class="form-control" [(ngModel)]="Data.email" name="email" formControlName="email" required ngModel email>\n\n                  </div>\n\n                </div>\n\n                <div class="form-group required">\n\n                  <div class="">\n\n                    <label class="control-label" for="input-enquiry">Mensaje:</label>\n\n                    <textarea rows="10" id="input-enquiry" class="form-control" [(ngModel)]="Data.message" name="message" formControlName="message"\n\n                      min="10" max="3000" required></textarea>\n\n                  </div>\n\n                </div>\n\n              </fieldset>\n\n              <div class="buttonsContacto">\n\n                <div class="pull-right">\n\n                  <input class="buttonLoco" type="submit" value="Enviar">\n\n                </div>\n\n              </div>\n\n            </form>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\cotizar\cotizar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_login_register_login_register__["a" /* LoginRegisterProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], CotizarPage);
    return CotizarPage;
}());

//# sourceMappingURL=cotizar.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(430);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_data_image_data__ = __webpack_require__(243);
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
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\admin\admin.html"*/'<!--\n\n  Generated template for the AdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title end>Admin</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <ion-segment [(ngModel)]="AdminTab" color="primary">\n\n      <ion-segment-button value="CarruselOfertas">\n\n        Carrusel Ofertas\n\n      </ion-segment-button>\n\n      <ion-segment-button value="CarruselPrincipal">\n\n        Carrusel Principal\n\n      </ion-segment-button>\n\n      <ion-segment-button value="AceptacionClientes">\n\n        Aceptacion de Clientes\n\n      </ion-segment-button>\n\n      <ion-segment-button value="ArchivosDescarga">\n\n        Administrar Archivos de Descarga\n\n      </ion-segment-button>\n\n      <ion-segment-button value="SubirProducto">\n\n        Administrar Productos\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n  <div [ngSwitch]="AdminTab">\n\n    <div *ngSwitchCase="\'CarruselOfertas\'">\n\n      <form #imageForm="ngForm" method="POST">\n\n        <input type="file" #Image accept="image/*" (change)="handleFileInput($event)">\n\n        <button ion-button type="submit" (click)="uploadPic()">Subir</button>\n\n      </form>\n\n      <ion-list *ngFor="let post of posts">\n\n        <ion-item>\n\n          <ion-card>\n\n            {{post.product_id}}\n\n            <button ion-button (click)="DeleteImageCarrOfer(image.id)"></button>\n\n          </ion-card>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div *ngSwitchCase="\'CarruselPrincipal\'">\n\n      <form #imageForm="ngForm" method="POST">\n\n        <input type="file" #Image accept="image/*" (change)="handleFileInput($event)">\n\n        <button ion-button type="submit" (click)="uploadPic()">Subir</button>\n\n      </form>\n\n      <ion-list *ngFor="let image of images">\n\n        <ion-item>\n\n          <ion-card>\n\n            <ion-card-content>\n\n              <button (click)="DeleteImageCarrMain(image.id)"></button>\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div *ngSwitchCase="\'ArchivosDescarga\'">\n\n      <form #DocumentForm="ngForm" method="POST">\n\n        <input type="file" (change)="handleFileInput($event)">\n\n        <button ion-button type="submit" (click)="upload()">Subir</button>\n\n      </form>\n\n    </div>\n\n    <div *ngSwitchCase="\'SubirProducto\'">\n\n\n\n    </div>\n\n    <div *ngSwitchCase="\'AceptacionClientes\'">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            <h2>Id</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Nombre</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Apellido</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Estado</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Saldo</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Clasificación</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>RTN</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Teléfono</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2>Modificar</h2>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngFor="let client of clients">\n\n          <ion-col>\n\n            {{client.client_id}}\n\n          </ion-col>\n\n          <ion-col>\n\n            {{client.client_name}}\n\n          </ion-col>\n\n          <ion-col>\n\n            {{client.client_last_name}}\n\n          </ion-col>\n\n          <ion-col>\n\n            {{client.client_status}}\n\n          </ion-col>\n\n          <ion-col>\n\n            {{client.client_balance}}\n\n          </ion-col>\n\n          <ion-col>\n\n            {{client.client_classification}}\n\n          </ion-col>\n\n          <ion-col>\n\n            <div *ngFor="let rtn of clientsRTN">\n\n              <span *ngIf="rtn.fk_client_id == client.client_id">\n\n                {{rtn.rtn_client}}\n\n              </span>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col>\n\n            <div *ngFor="let telephone of clientsTelephone">\n\n              <span *ngIf="telephone.fk_client_id == client.client_id">\n\n                {{telephone.phone_client}}\n\n              </span>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button>Modificar</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_image_data_image_data__["a" /* ImageDataProvider */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_crypto_js_hmac_sha512__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_crypto_js_hmac_sha512___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_crypto_js_hmac_sha512__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_crypto_js_enc_base64__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_crypto_js_enc_base64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_crypto_js_enc_base64__);
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
                    var hmacDigest = __WEBPACK_IMPORTED_MODULE_8_crypto_js_enc_base64___default.a.stringify(__WEBPACK_IMPORTED_MODULE_7_crypto_js_hmac_sha512___default()(Data.password, '9871236342'));
                    console.log(hmacDigest);
                    if (temp.Contraseña == hmacDigest) {
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Iniciar Sesion</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h1 class="Login">Iniciar Sesion</h1>\n\n  <form [formGroup]="loginForm" (ngSubmit)="Login(Data);">\n\n    <fieldset>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-name">Correo Electronico:</label>\n\n          <input type="text" class="form-control" [(ngModel)]="Data.username" name="username" formControlName="username" required>\n\n        </div>\n\n      </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-password">Contraseña:</label>\n\n          <input type="password" class="form-control" [(ngModel)]="Data.password" name="password" formControlName="password" required\n\n            ngModel>\n\n        </div>\n\n      </div>\n\n    </fieldset>\n\n    <div class="buttons">\n\n      <div class="pull-right">\n\n        <input class="buttonLoco2" type="submit" value="Ingresar">\n\n      </div>\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__["a" /* LoginRegisterProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}()); //main brackets

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js_hmac_sha512__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js_hmac_sha512___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_crypto_js_hmac_sha512__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js_enc_base64__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js_enc_base64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_crypto_js_enc_base64__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(46);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.afDatabase = afDatabase;
        this.navParams = navParams;
        this.LoginRegister = LoginRegister;
        this.Data = {};
        this.Contravalnull = false;
        this.my_variable = '#bfbcbc';
        this.registroExitoso = false;
        this.clavesRef = [];
        this.Activacion = 'Inactivo';
        this.passnumvall = false;
        this.passcapvall = false;
        this.passlowvall = false;
        this.passminvall = false;
        this.hasenter = false;
        this.passunequal = false;
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(2)]),
            userlastname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email]),
            direction: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            telephone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(15), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(15)]),
            telephone2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(15), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(15)]),
            RTN: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(16), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(16)]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator]),
            Repassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].nullValidator]),
        });
        this.descargaRef = afDatabase.list('clavesAntiguas');
        this.descargaRef.valueChanges().subscribe(function (datas) { _this.clavesRef = datas; }, function (err) { console.log("probleme : ", err); });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        this.showConfirm();
    };
    RegisterPage.prototype.Register = function (Data, estado) {
        console.log(Data);
        var hmacDigest = __WEBPACK_IMPORTED_MODULE_5_crypto_js_enc_base64___default.a.stringify(__WEBPACK_IMPORTED_MODULE_4_crypto_js_hmac_sha512___default()(Data.password, '9871236342'));
        var clientesRef = this.afDatabase.list('clientes').push({});
        clientesRef.set({ id: clientesRef.key, ClaveCliente: 0, NombreEmpresa: Data.username, NombreRepresentante: Data.userlastname, RTN: Data.RTN, Estatus: estado, Telefono1: Data.telephone, Telefono2: Data.telephone2, Contraseña: hmacDigest, Clasificacion: 0, Direccion: Data.direction, Correo: Data.email });
        this.registroExitoso = true;
        this.presentAlert("Registro Exitoso", "Se logro registrar con exito", "OK");
    };
    RegisterPage.prototype.presentAlert = function (Title, SubTitle, Button) {
        var alert = this.alertCtrl.create({
            title: Title,
            subTitle: SubTitle,
            buttons: [Button]
        });
        alert.present();
    };
    RegisterPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Registrarse',
            message: 'Es cliente nuevo o existente',
            buttons: [
                {
                    text: 'Nuevo',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Existente',
                    handler: function () {
                        _this.showPrompt();
                    }
                }
            ]
        });
        confirm.present();
    };
    RegisterPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Buscar Cliente Existente',
            message: "Ingrese su Clave de Cliente",
            inputs: [
                {
                    name: 'Clave',
                    placeholder: 'Clave'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.buscarCliente(data.Clave);
                    }
                }
            ]
        });
        prompt.present();
    };
    RegisterPage.prototype.buscarCliente = function (Clave) {
        var existe = false;
        for (var _i = 0, _a = this.clavesRef; _i < _a.length; _i++) {
            var iterator = _a[_i];
            if (Clave == iterator.Clave) {
                existe = true;
            }
        }
        if (existe) {
            this.presentAlert("Registre Sus Datos", "Su cuenta sera activada de forma automatica", "OK");
            this.Activacion = 'Activo';
        }
        else {
            this.presentAlert("No se encontro su cliente", "Su Clave no existe, cree una nueva cuenta o intente de nuevo", "OK");
            this.Activacion = 'InActivo';
        }
    };
    RegisterPage.prototype.onKeyUp = function (event) {
        var newValue = event.target.value;
        var regExp = new RegExp('^[0-9A-ZaÑñÁÉÍÓÚáéíóú,a-z, ]+$');
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
        this.passnumvall = false;
        this.passcapvall = false;
        this.passlowvall = false;
        this.passunequal = false;
        this.passminvall = false;
        this.hasenter = true;
        var passvalid = false;
        //this.Register(Data,this.Activacion);
        console.log(this.registerForm);
        if (this.registerForm.get('password').value) {
            var containsDigits = /[0-9]/.test(this.registerForm.get('password').value);
            var containsUpper = /[A-Z]/.test(this.registerForm.get('password').value);
            var containsLower = /[a-z]/.test(this.registerForm.get('password').value);
            if (!containsDigits) {
                this.passnumvall = true;
            }
            if (!containsUpper) {
                this.passcapvall = true;
            }
            if (!containsLower) {
                this.passlowvall = true;
            }
            if (this.registerForm.get('password').value.length < 8) {
                this.passminvall = true;
            }
            if (this.registerForm.get('password').value != this.registerForm.get('Repassword').value && this.registerForm.get('Repassword').value) {
                this.passunequal = true;
            }
            if (!this.passnumvall && !this.passlowvall && !this.passcapvall && !this.passunequal && !this.passminvall) {
                passvalid = true;
            }
        }
        if (this.registerForm.valid && passvalid) {
            this.Register(Data, this.Activacion);
            if (this.registroExitoso) {
                this.hasenter = false;
                this.registerForm.reset();
                this.registroExitoso = false;
                this.navCtrl.pop();
            }
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Registro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="registerForm" (ngSubmit)="FullRegister(Data)">\n\n    <fieldset>\n\n        <h1>Registro de Usuario</h1>\n\n        <div class="form-group required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-name">Nombre Empresa:</label>\n\n            <input type="text" class="form-control" [(ngModel)]="Data.username" name="username" formControlName="username" (keypress)="onKeyUp($event)"\n\n              (keyup)="onKeyUp($event)" min="2" max="32" required>\n\n          </div>\n\n          <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="(this.registerForm.touched && !this.registerForm.get(\'username\').value && this.hasenter) || (this.registerForm.untouched && this.hasenter)">\n\n            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n            <strong>Error!</strong>  Campo Requerido.\n\n          </div>\n\n          <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.registerForm.touched && this.registerForm.get(\'username\').invalid && this.registerForm.get(\'username\').touched  && this.hasenter">\n\n            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n            <strong>Error!</strong>  Nombre Invalido.\n\n          </div>\n\n        </div>\n\n      <div class="form-group required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-lastname">Nombre Representante:</label>\n\n            <input type="text" class="form-control" [(ngModel)]="Data.userlastname" name="userlastname" formControlName="userlastname" (keypress)="onKeyUp($event)"\n\n              (keyup)="onKeyUp($event)" min="3" max="32" required>\n\n          </div>\n\n          <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="(this.registerForm.touched && !this.registerForm.get(\'userlastname\').value && this.hasenter) || (this.registerForm.untouched && this.hasenter) ">\n\n            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n            <strong>Error!</strong>  Campo Requerido.\n\n          </div>\n\n          <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.registerForm.touched && this.registerForm.get(\'userlastname\').invalid && this.registerForm.get(\'userlastname\').touched  && this.hasenter">\n\n            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n            <strong>Error!</strong>  Representante Invalido.\n\n          </div>\n\n        </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-email">Correo Electrónico:</label>\n\n          <input type="text" class="form-control" [(ngModel)]="Data.email" name="email" formControlName="email" required ngModel email>\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="(this.registerForm.touched && !this.registerForm.get(\'email\').value && this.hasenter ) || (this.registerForm.untouched && this.hasenter) ">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close" >&times;</a>\n\n          <strong>Error!</strong>  Campo Requerido.\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.registerForm.touched && this.registerForm.get(\'email\').invalid && this.registerForm.get(\'email\').touched  && this.hasenter ">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n          <strong>Error!</strong>  Correo Invalido.\n\n        </div>\n\n      </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-password">Contraseña:</label>\n\n          <input type="password" class="form-control" [(ngModel)]="Data.password" name="password" formControlName="password" min="5"\n\n            max="32"(keypress)="checkPassWord($event)" (keyup)="checkPassWord($event)" required>\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="(this.registerForm.touched && !this.registerForm.get(\'password\').value && this.hasenter) || (this.registerForm.untouched && this.hasenter) ">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close" >&times;</a>\n\n          <strong>Error!</strong>  Campo Requerido.\n\n        </div>\n\n        <div class="alert alert-danger  alert-dismissible col-sm-10" *ngIf="this.registerForm.touched && this.passnumvall">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close" (click)="this.passnumvall = false">&times;</a>\n\n          <strong>Error!</strong>La contraseña deber contener almenos un numero.\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.registerForm.touched && this.passcapvall">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close" (click)="this.passcapvall = false">&times;</a>\n\n          <strong>Error!</strong>La contraseña deber contener almenos una letra mayuscula.\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.registerForm.touched && this.passlowvall">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close" (click)="this.passlowvall = false">&times;</a>\n\n          <strong>Error!</strong>La contraseña deber contener almenos una letra minuscula.\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.registerForm.touched && this.passminvall">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close" (click)="this.passminvall = false">&times;</a>\n\n          <strong>Error!</strong>La contraseña deber contener almenos 8 caracteres.\n\n        </div>\n\n      </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-password">Ingrese Contraseña Nuevamente:</label>\n\n          <input [style.borderColor]="my_variable" type="password" class="form-control" [(ngModel)]="Data.Repassword" name="Repassword" formControlName="Repassword"\n\n            min="5" max="32" required [ngStyle]="style" (keypress)="checkPassWord1($event)" (keyup)="checkPassWord1($event)">\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="(this.registerForm.touched && !this.registerForm.get(\'Repassword\').value && this.hasenter) || (this.registerForm.untouched && this.hasenter) ">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n          <strong>Error!</strong>  Campo Requerido.\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.registerForm.touched && this.passunequal">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n          <strong>Error!</strong>  Las Contraseña no son iguales.\n\n        </div>\n\n      </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-enquiry">Direccion</label>\n\n          <textarea rows="10" id="input-enquiry" class="form-control" [(ngModel)]="Data.direction" name="direction" formControlName="direction"\n\n            min="10" max="3000" required></textarea>\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="(this.registerForm.touched && !this.registerForm.get(\'direction\').value && this.hasenter) || (this.registerForm.untouched && this.hasenter) ">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close" >&times;</a>\n\n          <strong>Error!</strong>  Campo Requerido.\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.registerForm.touched && this.registerForm.get(\'direction\').invalid && this.registerForm.get(\'direction\').touched  && this.hasenter">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n          <strong>Error!</strong>  Direccion Invalida.\n\n        </div>\n\n      </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-telephone">Telefono 1:</label>\n\n          <input type="tel" class="form-control" [(ngModel)]="Data.telephone" [brmasker]="{mask:\'+(000)0000-0000\', len:15}" name="telephone"\n\n            formControlName="telephone" (keypress)="onKeyUpNum($event)" (keyup)="onKeyUpNum($event)"  min=\'15\' max="15" placeholder="+(504)9999-9999" required>\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="(this.registerForm.touched && !this.registerForm.get(\'telephone\').value && this.hasenter) || (this.registerForm.untouched && this.hasenter) ">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close" >&times;</a>\n\n          <strong>Error!</strong>  Campo Requerido.\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.registerForm.touched && this.registerForm.get(\'telephone\').invalid && this.registerForm.get(\'telephone\').touched  && this.hasenter">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n          <strong>Error!</strong>  Telefono Invalido.\n\n        </div>\n\n      </div>\n\n      <div class="form-group required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-telephone">Telefono 2:</label>\n\n            <input type="tel" class="form-control" [(ngModel)]="Data.telephone2" [brmasker]="{mask:\'+(000)0000-0000\', len:15}" name="telephone2"\n\n              formControlName="telephone2" (keypress)="onKeyUpNum($event)" (keyup)="onKeyUpNum($event)" placeholder="+(504)9999-9999" \n\n              max="15"  required>\n\n          </div>\n\n          <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="(this.registerForm.touched && !this.registerForm.get(\'telephone2\').value && this.hasenter) || (this.registerForm.untouched && this.hasenter) ">\n\n            <a href="#" class="close" data-dismiss="alert" aria-label="close" >&times;</a>\n\n            <strong>Error!</strong>  Campo Requerido.\n\n          </div>\n\n          <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.registerForm.touched && this.registerForm.get(\'telephone2\').invalid && this.registerForm.get(\'telephone2\').touched  && this.hasenter">\n\n            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n            <strong>Error!</strong>  Telefono Invalido.\n\n          </div>\n\n        </div>\n\n      <div class="form-group required">\n\n        <div class="col-sm-10">\n\n          <label class="col-sm-2 control-label" for="input-id">RTN:</label>\n\n          <input type="text" class="form-control" [(ngModel)]="Data.RTN" name="RTN" formControlName="RTN" [brmasker]="{mask:\'0000-0000-000000\', len:16}"\n\n            (keypress)="onKeyUpRTN($event)" placeholder="9999-9999-999999"  (keyup)="onKeyUpRTN($event)" min="16" max="16" required>\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="(this.registerForm.touched && !this.registerForm.get(\'RTN\').value && this.hasenter) || (this.registerForm.untouched && this.hasenter) ">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close" >&times;</a>\n\n          <strong>Error!</strong>  Campo Requerido.\n\n        </div>\n\n        <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.registerForm.touched && this.registerForm.get(\'RTN\').invalid && this.registerForm.get(\'RTN\').touched  && this.hasenter">\n\n          <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n          <strong>Error!</strong>  RTN Invalido.\n\n        </div>\n\n      </div>\n\n    </fieldset>\n\n    <div class="buttons">\n\n      <div class="pull-right">\n\n        <input class="btn btn-primary button" type="submit" value="Registrarse">\n\n      </div>\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__["a" /* LoginRegisterProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(19);
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
    function ProfilePage(navCtrl, alertCtrl, navParams, afDatabase, LoginRegister) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.LoginRegister = LoginRegister;
        this.Data = {};
        this.hasenter = false;
        this.clientesref = afDatabase.list('clientes');
        this.user = this.LoginRegister.userLogged;
        this.profileForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].nullValidator, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(2)]),
            userlastname: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].nullValidator, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(3)]),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].nullValidator, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].email]),
            direction: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](),
            telephone: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(15), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].maxLength(15)]),
            telephone2: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(15), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].maxLength(15)]),
            RTN: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].minLength(16), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].maxLength(16)]),
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.modificar = function (Data) {
        var newupdates = {};
        var updates = {};
        var temp = 0;
        console.log(Data);
        if (Data.username != undefined) {
            if (this.profileForm.get('username').valid) {
                temp++;
                updates['/clientes/' + this.user.id + '/NombreEmpresa'] = Data.username;
                this.user.NombreEmpresa = Data.username;
            }
        }
        if (Data.userlastname != undefined) {
            if (this.profileForm.get('userlastname').valid) {
                temp++;
                updates['/clientes/' + this.user.id + '/NombreRepresentante'] = Data.userlastname;
                this.user.NombreRepresentante = Data.userlastname;
            }
        }
        if (Data.email != undefined) {
            if (this.profileForm.get('email').valid) {
                temp++;
                updates['/clientes/' + this.user.id + '/Correo'] = Data.email;
                this.user.Correo = Data.email;
            }
        }
        if (Data.direction != undefined) {
            if (this.profileForm.get('direction').valid) {
                temp++;
                updates['/clientes/' + this.user.id + '/Direccion'] = Data.direction;
                this.user.Direccion = Data.direction;
            }
        }
        if (Data.telephone != undefined) {
            if (this.profileForm.get('telephone').valid) {
                temp++;
                updates['/clientes/' + this.user.id + '/Telefono1'] = Data.telephone;
                this.user.Telefono1 = Data.telephone;
            }
        }
        if (Data.telephone2 != undefined) {
            if (this.profileForm.get('telephone2').valid) {
                temp++;
                updates['/clientes/' + this.user.id + '/Telefono2'] = Data.telephone2;
                this.user.Telefono2 = Data.telephone2;
            }
        }
        if (Data.RTN != undefined) {
            if (this.profileForm.get('RTN').valid) {
                temp++;
                updates['/clientes/' + this.user.id + '/RTN'] = Data.RTN;
                this.user.RTN = Data.RTN;
            }
        }
        if (temp > 0) {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref().update(updates);
            this.presentAlert("Modificacion Exitosa", "Se logro modificar con exito", "OK");
            this.hasenter = false;
        }
        else {
            this.presentAlert("Error Al Modificar", "No Se logro modificar", "OK");
        }
    };
    ProfilePage.prototype.presentConfirm = function (Data) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar Modificacion',
            message: 'Desea realizar modificacion?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this.ValidateModify(Data);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.presentAlert = function (Title, SubTitle, Button) {
        var alert = this.alertCtrl.create({
            title: Title,
            subTitle: SubTitle,
            buttons: [Button]
        });
        alert.present();
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
    ProfilePage.prototype.onKeyUp = function (event) {
        var newValue = event.target.value;
        var regExp = new RegExp('^[A-ZaÑñÁÉÍÓÚáéíóú,a-z, ]+$');
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
    };
    ProfilePage.prototype.onKeyUpNum = function (event) {
        var newValue = event.target.value;
        var regExp = new RegExp('^[0-9, +()-]+$');
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
    };
    ProfilePage.prototype.onKeyUpRTN = function (event) {
        var newValue = event.target.value;
        var regExp = new RegExp('^[0-9, -]+$');
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
    };
    ProfilePage.prototype.ValidateModify = function (Data) {
        this.hasenter = true;
        console.log(this.profileForm);
        this.modificar(Data);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">\n\n  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>\n\n  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<!-- value="{{user.NombreEmpresa}}"" -->\n\n<ion-content padding>\n\n  <div>\n\n    <div>\n\n      <h1>Perfil de Usuario</h1>\n\n      <img class="avatar" src="assets/icon/perfil.png" alt="">\n\n    </div>\n\n    <form [formGroup]="profileForm" (ngSubmit)="presentConfirm(Data)">\n\n      <fieldset>\n\n        <div class="form-group1 required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-name">Nombre Empresa:</label>\n\n            <input type="text" class="form-control" [(ngModel)]="Data.username" name="username" formControlName="username" (keypress)="onKeyUp($event)" value="{{user.NombreEmpresa}}"\n\n              (keyup)="onKeyUp($event)" min="2" max="32" required> \n\n          </div>\n\n          <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.profileForm.touched && this.profileForm.get(\'username\').invalid && this.profileForm.get(\'username\').touched  && this.hasenter">\n\n            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n            <strong>Error!</strong>  Nombre Invalido.\n\n          </div>\n\n        </div>\n\n        <div class="form-group1 required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-lastname">Nombre Representante:</label>\n\n            <input type="text" class="form-control" [(ngModel)]="Data.userlastname" name="userlastname" formControlName="userlastname" (keypress)="onKeyUp($event)" value="{{user.NombreRepresentante}}"\n\n              (keyup)="onKeyUp($event)" min="3" max="32" required>\n\n          </div>\n\n          <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.profileForm.touched && this.profileForm.get(\'userlastname\').invalid && this.profileForm.get(\'userlastname\').touched  && this.hasenter">\n\n            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n            <strong>Error!</strong>  Representante Invalido.\n\n          </div>\n\n        </div>\n\n        <div class="form-group1 required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-email">Correo Electrónico:</label>\n\n            <input type="text" class="form-control" [(ngModel)]="Data.email" name="email" formControlName="email" value="{{user.Correo}}"required ngModel email>\n\n          </div>\n\n          <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.profileForm.touched && this.profileForm.get(\'email\').invalid && this.profileForm.get(\'email\').touched  && this.hasenter ">\n\n            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n            <strong>Error!</strong>  Correo Invalido.\n\n          </div>\n\n        </div>\n\n        <div class="form-group1 required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-enquiry">Direccion</label>\n\n            <textarea rows="10" id="input-enquiry" class="form-control" [(ngModel)]="Data.direction" name="direction" formControlName="direction" value="{{user.Direccion}}"\n\n              min="10" max="3000" required></textarea>\n\n          </div>\n\n          <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.profileForm.touched && this.profileForm.get(\'direction\').invalid && this.profileForm.get(\'direction\').touched  && this.hasenter">\n\n            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n            <strong>Error!</strong>  Direccion Invalida.\n\n          </div>\n\n        </div>\n\n        <div class="form-group1 required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-telephone">Telefono 1:</label>\n\n            <input type="tel" class="form-control" [(ngModel)]="Data.telephone" [brmasker]="{mask:\'+(000)0000-0000\', len:15}" name="telephone" value="{{user.Telefono1}}"\n\n              formControlName="telephone" (keypress)="onKeyUpNum($event)" (keyup)="onKeyUpNum($event)"  min=\'15\' max="15" placeholder="+(504)9999-9999" required>\n\n          </div>\n\n          <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.profileForm.touched && this.profileForm.get(\'telephone\').invalid && this.profileForm.get(\'telephone\').touched  && this.hasenter">\n\n            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n            <strong>Error!</strong>  Telefono Invalido.\n\n          </div>\n\n        </div>\n\n        <div class="form-group1 required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-telephone2">Telefono 2:</label>\n\n            <input type="tel" class="form-control" [(ngModel)]="Data.telephone2" [brmasker]="{mask:\'+(000)0000-0000\', len:15}" name="telephone2" value="{{user.Telefono2}}"\n\n              formControlName="telephone2" (keypress)="onKeyUpNum($event)" (keyup)="onKeyUpNum($event)"  min=\'15\' max="15" placeholder="+(504)9999-9999" required>\n\n          </div>\n\n          <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.profileForm.touched && this.profileForm.get(\'telephone2\').invalid && this.profileForm.get(\'telephone2\').touched  && this.hasenter">\n\n            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n            <strong>Error!</strong>  Telefono2 Invalido.\n\n          </div>\n\n        </div>\n\n        <div class="form-group1 required">\n\n          <div class="col-sm-10">\n\n            <label class="col-sm-2 control-label" for="input-id">RTN:</label>\n\n            <input type="text" class="form-control" [(ngModel)]="Data.RTN" name="RTN" formControlName="RTN" [brmasker]="{mask:\'0000-0000-000000\', len:16}"  value="{{user.RTN}}"\n\n              (keypress)="onKeyUpRTN($event)" placeholder="9999-9999-999999"  (keyup)="onKeyUpRTN($event)" min="16" max="16" required>\n\n          </div>\n\n          <div class="alert alert-danger alert-dismissible col-sm-10" *ngIf="this.profileForm.touched && this.profileForm.get(\'RTN\').invalid && this.profileForm.get(\'RTN\').touched  && this.hasenter">\n\n            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\n\n            <strong>Error!</strong>  RTN Invalido.\n\n          </div>\n\n        </div>\n\n      </fieldset>\n\n      <div class="buttons1">\n\n        <div>\n\n          <!-- <input  type="delete" value="Eliminar Cuenta"> -->\n\n\n\n          <input type="submit" class="btn btn-info" value="Modificar">\n\n          <button type="button2" class="btn btn-danger" (click)=\'eliminarClientes()\'>Borrar Cuenta</button>\n\n        </div>\n\n      </div>\n\n    </form>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n\n\n<!--  -->'/*ion-inline-end:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__["a" /* LoginRegisterProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_brmasker_ionic__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_login_register_login_register__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_image_data_image_data__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_product_product__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_downloads_downloads__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_showproduct_showproduct__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__header_header_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cotizar_cotizar__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_global_global__ = __webpack_require__(94);
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
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_27__providers_global_global__["a" /* GlobalProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(301);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n\n\n'/*ion-inline-end:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_login_register_login_register__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(41);
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

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(251);
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

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login_register_login_register__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__showproduct_showproduct__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(59);
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
    function HomePage(alertCtrl, navCtrl, LoginRegister, auth, afDatabase, afAuth) {
        this.alertCtrl = alertCtrl;
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
        this.productosRef = afDatabase.list('productos', function (ref) { return ref.orderByChild('visita').limitToLast(4); });
        this.productos = this.productosRef.valueChanges();
        console.log(this.productos);
    }
    HomePage.prototype.goToSlide = function () {
        this.slides.slideTo(0, 15000);
    };
    HomePage.prototype.next = function () {
        this.slides.slideNext();
    };
    HomePage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    HomePage.prototype.push = function (p) {
        var refpo = this.afDatabase.database.ref('productos');
        var update = this.afDatabase.list('productos');
        refpo.orderByChild('codigo').equalTo(p.codigo)
            .once('value').then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                update.update(childSnapshot.key, { visita: childSnapshot.val().visita + 1 });
            });
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__showproduct_showproduct__["a" /* ShowproductPage */], { productoEntrada: p });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\home\home.html"*/'<ion-header>\n\n  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"\n\n    crossorigin="anonymous">\n\n  <ion-navbar hide-nav-bar="false">\n\n    <app-header></app-header>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="bodyHome">\n\n    <div class="pictureCarrusel">\n\n      <ion-slides class="carrusel">\n\n        <ion-slide *ngFor="let oferta of ofertas | async">\n\n          <img src={{oferta.imagen}}>\n\n          <button type="submit" ion-button round color="light" class="swiper-button-prev swiper-button-black" (click)="prev()"></button>\n\n          <button type="submit" ion-button round color="light" class="swiper-button-next swiper-button-black" (click)="next()"></button>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n\n\n    <div class="container">\n\n      <!-- Page Features -->\n\n      <div class="row text-center">\n\n            <div class="col-lg-3 col-md-6 mb-4" *ngFor=" let producto of productos|async">\n\n                <div class="card">\n\n                  <img class="card-img-top" src="{{producto.imagen}}" alt="" style="height:200px;">\n\n                  <div class="card-body">\n\n                    <h4 class="card-title">{{producto.nombre}}</h4>\n\n                    <p class="card-text" >{{producto.descripcion}}</p>\n\n                    <button onclick=""></button>\n\n                  </div>\n\n                  <div class="card-footer">\n\n                    <a href="#" (click)="push(producto)" class="btn btn-primary">Encuentrala Aquí!</a>\n\n                  </div>\n\n                </div>\n\n              </div>\n\n      </div>\n\n      <!-- /.row -->\n\n\n\n    </div>\n\n    <!-- <div class="pictureCarrusel1">\n\n\n\n      <ion-slides lass="carrusel2">\n\n\n\n        <ion-slide *ngFor="let logo of logos| async">\n\n          <img src={{logo.imagen}}>\n\n        </ion-slide>\n\n\n\n      </ion-slides>\n\n    </div>-->\n\n    <div>\n\n    </div>\n\n    <div class="footer-distributed">\n\n      <div class="footer-left">\n\n\n\n        <h3>Distribuidora\n\n          <span>Realva</span>\n\n        </h3>\n\n\n\n        <p class="footer-links">\n\n          <a href="#">Inicio</a>\n\n          ·\n\n          <a href="#">Productos</a>\n\n          ·\n\n          <a href="#">Nosotros</a>\n\n          ·\n\n          <a href="#">Contacto</a>\n\n          ·\n\n          <a href="#">Descargas</a>\n\n        </p>\n\n\n\n        <p class="footer-company-name">Realva &copy; 2018</p>\n\n      </div>\n\n\n\n      <div class="footer-center">\n\n\n\n        <div>\n\n          <i class="fa fa-map-marker"></i>\n\n          <p>\n\n            <span>\n\n              Edificio Alvarenga, Boulevard Morazán.</span> Tegucigalpa, Honduras</p>\n\n        </div>\n\n\n\n        <div>\n\n          <i class="fa fa-phone"></i>\n\n          <p> +(504) 2236-5531 / 2236-5902 / 2236-8719</p>\n\n        </div>\n\n\n\n        <div>\n\n          <i class="fa fa-envelope"></i>\n\n          <p>\n\n            <a href="mailto:support@company.com">info@realva.com</a>\n\n          </p>\n\n        </div>\n\n\n\n      </div>\n\n\n\n      <div class="footer-right">\n\n\n\n        <p class="footer-company-about">\n\n          <span>Acerca de Nosotros</span>\n\n          Empresas Productoras, Importadoras y Distribuidoras de Productos Veterinarios y Agrícolas. Las empresas manejan la representación\n\n          de diversas líneas Veterinarias de calidad y está en proceso de comenzar la distribución de líneas de productos\n\n          agrícolas.\n\n        </p>\n\n\n\n        <div class="footer-icons">\n\n\n\n          <a href="https://www.facebook.com/RealvaHonduras/">\n\n            <i class="fa fa-facebook"></i>\n\n          </a>\n\n          <a href="#">\n\n            <i class="fa fa-twitter"></i>\n\n          </a>\n\n          <a href="#">\n\n            <i class="fa fa-linkedin"></i>\n\n          </a>\n\n          <a href="#">\n\n            <i class="fa fa-youtube"></i>\n\n          </a>\n\n          <a href="#">\n\n              <i class="fa fa-instagram"></i>\n\n          </a>\n\n\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_login_register_login_register__["a" /* LoginRegisterProvider */], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
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
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider(http) {
        this.http = http;
        this.cotizaciones = [];
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__ = __webpack_require__(24);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function ShowproductPage(LoginRegister, global, navCtrl, navParams) {
        this.LoginRegister = LoginRegister;
        this.global = global;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.producto = navParams.get('productoEntrada');
        console.log(this.producto.price);
        this.presentacion = this.producto.presentacion[0];
    }
    ShowproductPage.prototype.dosisPrecio = function (dosis) {
        this.presentacion = dosis;
    };
    ShowproductPage.prototype.cotizando = function (c) {
        var cantidad = 1;
        var a = __assign({}, c, this.presentacion, { cantidad: cantidad });
        console.log(a);
        if (this.global.cotizaciones.length == 0) {
            this.global.cotizaciones.push(a);
        }
        else {
            for (var i = 0; i < this.global.cotizaciones.length; i++) {
                if (this.global.cotizaciones[i].precio == a.precio && this.global.cotizaciones[i].nombre == a.nombre) {
                    break;
                }
                if (i === this.global.cotizaciones.length - 1 && this.global.cotizaciones[i].precio !== a.precio) {
                    this.global.cotizaciones.push(a);
                }
            }
        }
    };
    ShowproductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showproduct',template:/*ion-inline-start:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\showproduct\showproduct.html"*/'<!--\n\n  Generated template for the ShowproductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Regresar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <!-- Section: Blog v.1 -->\n\n  <div class="container">\n\n    <section class="my-5">\n\n      <div class="row">\n\n        <div class="col-lg-5">\n\n          <div class="view overlay rounded z-depth-2 mb-lg-0 mb-4">\n\n            <img class="img-fluid" src="{{producto.imagen}}" alt="Sample image">\n\n            <div class="mask rgba-white-slight"></div>\n\n          </div>\n\n        </div>\n\n        <div class="col-lg-7">\n\n          <h2 class="font-weight-bold mb-3 text-center"><strong>{{producto.nombre}}</strong></h2>\n\n          <p><b>Precio:</b> L. {{presentacion.precio}}</p>\n\n          <div class="row">\n\n            <div class="col col-2">\n\n              <p><b>Dosis: </b></p>\n\n            </div>\n\n            <div *ngFor="let dosis of producto.presentacion" class="col col-2">\n\n              <a class="text-primary" (click)="dosisPrecio(dosis)">\n\n                <p> {{dosis.dosis}} </p>\n\n              </a>\n\n            </div>\n\n          </div>\n\n          <p><b>Descripcion: </b>{{producto.descripcion}}</p>\n\n          <p margin-top="2px">\n\n            <b>Indicaciones: </b>{{producto.indicacion}}\n\n          </p>\n\n          <p>\n\n            <b>Contra indicaciones: </b>{{producto.contraindicacion}}\n\n          </p>\n\n          <p>\n\n            <b>Especies: </b>{{producto.especie}}</p>\n\n          <p>\n\n            <b>Tipo de uso: </b>{{producto.tipoUso}}</p>\n\n\n\n\n\n          <a class="btn btn-success" (click)="cotizando(producto)">Cotizar</a>\n\n        </div>\n\n      </div>\n\n      <hr class="my-5">\n\n    </section>\n\n  </div>\n\n  <div class="footer-distributed">\n\n    <div class="footer-left">\n\n\n\n      <h3>Distribuidora\n\n        <span>Realva</span>\n\n      </h3>\n\n\n\n      <p class="footer-links">\n\n        <a href="#">Inicio</a>\n\n        ·\n\n        <a href="#">Productos</a>\n\n        ·\n\n        <a href="#">Nosotros</a>\n\n        ·\n\n        <a href="#">Contacto</a>\n\n        ·\n\n        <a href="#">Descargas</a>\n\n      </p>\n\n\n\n      <p class="footer-company-name">Realva &copy; 2018</p>\n\n    </div>\n\n\n\n    <div class="footer-center">\n\n\n\n      <div>\n\n        <i class="fa fa-map-marker"></i>\n\n        <p>\n\n          <span>\n\n            Edificio Alvarenga, Boulevard Morazán.</span> Tegucigalpa, Honduras</p>\n\n      </div>\n\n\n\n      <div>\n\n        <i class="fa fa-phone"></i>\n\n        <p> +(504) 2236-5531 / 2236-5902 / 2236-8719</p>\n\n      </div>\n\n\n\n      <div>\n\n        <i class="fa fa-envelope"></i>\n\n        <p>\n\n          <a href="mailto:support@company.com">info@realva.com</a>\n\n        </p>\n\n      </div>\n\n\n\n    </div>\n\n\n\n    <div class="footer-right">\n\n\n\n      <p class="footer-company-about">\n\n        <span>Acerca de Nosotros</span>\n\n        Empresas Productoras, Importadoras y Distribuidoras de Productos Veterinarios y Agrícolas. Las empresas manejan\n\n        la representación\n\n        de diversas líneas Veterinarias de calidad y está en proceso de comenzar la distribución de líneas de productos\n\n        agrícolas.\n\n      </p>\n\n\n\n      <div class="footer-icons">\n\n\n\n        <a href="#">\n\n          <i class="fa fa-facebook"></i>\n\n        </a>\n\n        <a href="#">\n\n          <i class="fa fa-twitter"></i>\n\n        </a>\n\n        <a href="#">\n\n          <i class="fa fa-linkedin"></i>\n\n        </a>\n\n        <a href="#">\n\n          <i class="fa fa-github"></i>\n\n        </a>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Zelaya\Documents\GitHub\grupo-realva-proyecto-ing.-software-\realva\src\pages\showproduct\showproduct.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_login_register_login_register__["a" /* LoginRegisterProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ShowproductPage);
    return ShowproductPage;
}());

//# sourceMappingURL=showproduct.js.map

/***/ })

},[309]);
//# sourceMappingURL=main.js.map