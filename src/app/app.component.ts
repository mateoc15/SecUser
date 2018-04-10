import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CompraPage } from '../pages/compra/compra';
import { ListaMedicamentosPage } from '../pages/lista-medicamentos/lista-medicamentos';
import { CarritoPage } from '../pages/carrito/carrito';
import {LoginPage} from'../pages/login/login';
import {AddInventarioPage} from '../pages/add-inventario/add-inventario';
import { AddAdminPage } from '../pages/add-admin/add-admin';
import { AddRepartidorPage} from '../pages/add-repartidor/add-repartidor';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Compra de medicamentos', component: CompraPage },
      { title : 'Agregar Administrador', component:AddAdminPage},
      { title: 'Agregar Repartidor', component: AddRepartidorPage},
      { title: 'Agregar Producto a inventario', component: AddInventarioPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
