import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { OlvidarContraseña2Page } from '../olvidar-contraseña2/olvidar-contraseña2';
import { CambiarContraseña2Page } from '../cambiar-contraseña2/cambiar-contraseña2';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    @ViewChild('username') uname;
    @ViewChild('password') upass;
    //variable que será tomada para consultar
    //si es la primera vez que el usuario entra a la aplicación
    firstTime: boolean = true;

    private log = {
        correo: '',
        tipo: '',
        contrasena: ''
    }

  constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public restProvider: RestProvider
            ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.restProvider.login(this.log).then((result) => {
        this.next(result);
      console.log(result);

    }, (err) => {
        this.next(err);
      console.log(err);
    })
  }

  next(result: any):void{
    this.goMain();
      /*switch(result.status){
          case 200: {
              this.goMain();
              break;
          }
          case 300: {
            var alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Correo o contraseña incorrecta',
                buttons: ['0k']
            });
            alert.present();
            return;
          }
          case 201: {
              this.goChangePass();
              break;
          }
          default:{
            var alert = this.alertCtrl.create({
                title: 'Error: ' + result.status,
                subTitle: 'Se Ha Producido Un Problema, Intente de Nuevo Más Tarde',
                buttons: ['0k']
            });
            alert.present();
            return;
          }
      }*/
  }






    goMain():void{
        this.navCtrl.setRoot(HomePage);
    }
    /*
    goMain():void{
        var unameShow = this.uname.value;
        var upassShow = this.upass.value;
        //var log = false;
        if(this.login()){
            if(this.firstTime){
                //si es la primera vez que el usuario entra
                //primero entra a cambiar la contraseña
                this.navCtrl.setRoot(CambiarContraseña2Page);
            }else{
                //si no es la primera vez, entra de una vez a
                //la vista principal
                this.navCtrl.setRoot(HomePage);
            }

        }else{
            var alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'El usuario '+ unameShow +'o su contraseña no existen',
                buttons: ['0k']
            });
            alert.present();
        }

    }
    */

    goOlvideContrasena():void{
        this.navCtrl.setRoot(OlvidarContraseña2Page);
    }

    goChangePass():void{
        this.navCtrl.setRoot(CambiarContraseña2Page,{
            correo: this.log.correo,
            contrasena: this.log.contrasena,
            tipo: this.log.tipo
        });
    }

    validate(data: any):boolean {
        var booleanValidte: boolean = true;
        if(data.correo=''){
          booleanValidte = false;
        }else if(data.tipo=''){
          booleanValidte = false;
        }else if (data.contrasena=''){
          booleanValidte = false;
        }
        return booleanValidte;
    }

}
