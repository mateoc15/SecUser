import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';

/**
 * Generated class for the CambiarContraseña2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cambiar-contrasena2',
  templateUrl: 'cambiar-contraseña2.html',
})
export class CambiarContraseña2Page {
  @ViewChild('actualPass') actualPass;
  @ViewChild('pass1') pass1;
  @ViewChild('pass2') pass2;

  private log2 = {
    correo: '',
    tipo: '',
    contrasena: ''
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              public restProvider: RestProvider
            ) {

    this.log2.correo = navParams.get('correo');
    this.log2.contrasena = '';
    this.log2.tipo = navParams.get('tipo');
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CambiarContraseña2Page');
  }

  equalsPass(passA: string, passB: string):boolean {
    if(passA == passB && (passA != '' || passB != '')){
      return true;
    }else{
      var alertB = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'las contraseñas no coinciden '+ this.actualPass.value,
          buttons: ['0k']
      });
      alertB.present();
      return false;
    }
  }

  /*
  validateEqual(passA: string, passB: string){
    if(this.equalsPass(passA, passB)){
          var alertA = this.alertCtrl.create({
            title: 'Todo ok',
            subTitle: 'Las contraseñas coinciden '+ this.actualPass.value,
            buttons: ['0k']
        });
        alertA.present();
        this.navCtrl.setRoot(LoginPage);
    }else{
        var alertB = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'las contraseñas no coinciden '+ this.actualPass.value,
          buttons: ['0k']
      });
      alertB.present();
    }
  }
  */
  


  changePass(){

    if(this.equalsPass(this.pass1.value, this.pass2.value)){
      this.restProvider.changePass(this.log2).then((result) => {
        
        console.log(result);
        this.goMain();
        
      }, (err) => { 
          
        console.log(err);
      })
    }
  }


  goMain():void{
    this.navCtrl.setRoot(HomePage);
}

}
