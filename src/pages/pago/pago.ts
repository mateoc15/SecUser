import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the PagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pago',
  templateUrl: 'pago.html',
})
export class PagoPage {

  pago = { merchantId: '508029', accountId: '512321', description: 'Test PAYU', referenceCode: 'TestPayu', amount: '3',
           tax: '0', taxReturnBase: '0', currency: 'USD', signature: 'ba9ffa71559580175585e45ce70b6c37', test: '1', 
           buyerEmail: 'test@test.com'};

           private datos = {
            inomenclatura: ''
          }
          solicitudd = { id_cliente: '2', tipo_documento_cliente: 'cc', nomenclatura: 'cll', estado: 'pendiente'};



  constructor(public navCtrl: NavController, public navParams: NavParams,public userServiceProvider: UserServiceProvider, private iap: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagoPage');
  }

  pagar(){
    this.userServiceProvider.solicitudDomicilio(this.solicitudd).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

}
