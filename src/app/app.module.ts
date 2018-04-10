import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CompraPage } from '../pages/compra/compra';
import { ListaMedicamentosPage } from '../pages/lista-medicamentos/lista-medicamentos';
import { CarritoPage } from '../pages/carrito/carrito';

import { ModalInfoMedicamentoPage } from '../pages/modal-info-medicamento/modal-info-medicamento';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPageModule} from '../pages/login/login.module';
import {AddInventarioPageModule} from '../pages/add-inventario/add-inventario.module';
import { OlvidarContraseña2PageModule } from '../pages/olvidar-contraseña2/olvidar-contraseña2.module';
import { CambiarContraseña2PageModule} from '../pages/cambiar-contraseña2/cambiar-contraseña2.module';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { AddAdminPageModule } from '../pages/add-admin/add-admin.module';
import { AddRepartidorPageModule } from '../pages/add-repartidor/add-repartidor.module';
import { UserServiceProvider } from '../providers/user-service/user-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CompraPage,
    CarritoPage,
    ListaMedicamentosPage
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    LoginPageModule,
    AddInventarioPageModule,
    OlvidarContraseña2PageModule,
    CambiarContraseña2PageModule,
    AddAdminPageModule,
    AddRepartidorPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CompraPage,
    CarritoPage,
    ListaMedicamentosPage
  ],
  providers: [
    StatusBar,
    RestProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    UserServiceProvider
  ]
})
export class AppModule {}
