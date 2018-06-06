import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CompraPage } from '../pages/compra/compra';
import { ListaMedicamentosPage } from '../pages/lista-medicamentos/lista-medicamentos';
import { CarritoPage } from '../pages/carrito/carrito';

import { ModalInfoMedicamentoPage } from '../pages/modal-info-medicamento/modal-info-medicamento';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPageModule} from '../pages/login/login.module';
import { OlvidarContraseña2PageModule } from '../pages/olvidar-contraseña2/olvidar-contraseña2.module';
import { CambiarContraseña2PageModule} from '../pages/cambiar-contraseña2/cambiar-contraseña2.module';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { RegistroPageModule } from '../pages/registro/registro.module';
import { PagoPage } from '../pages/pago/pago';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CompraPage,
    CarritoPage,
    ListaMedicamentosPage,
    PagoPage
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    LoginPageModule,
    OlvidarContraseña2PageModule,
    CambiarContraseña2PageModule,
    RegistroPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CompraPage,
    CarritoPage,
    ListaMedicamentosPage,
    PagoPage
  ],
  providers: [
    StatusBar,
    RestProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    InAppBrowser
  ]
})
export class AppModule {}
