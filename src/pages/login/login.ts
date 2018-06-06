import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { OlvidarContraseña2Page } from '../olvidar-contraseña2/olvidar-contraseña2';
import { CambiarContraseña2Page } from '../cambiar-contraseña2/cambiar-contraseña2';
import { RestProvider } from '../../providers/rest/rest';
import { RegistroPage } from '../registro/registro';


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
        contraseña: '',
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
        /*
        var alert = this.alertCtrl.create({
            title: 'Lo Sentimos',
            subTitle: 'Tuvimos un problema de ultimo momento con esta parte...\t El Login redirige directamente a la Página Principal',
            buttons: ['0k']
        });
        alert.present();
        this.goMain();
        */
       
        /*
        if(!this.validate(this.log)){
            var alert = this.alertCtrl.create({
                title: 'Campos Vacios',
                subTitle: 'Por Favor LLenar Los Campos Faltantes',
                buttons: ['0k']
            });
            alert.present();
            return;
        }
        */
       this.log.contraseña=this.log.contrasena;
        this.restProvider.login(this.log).then((result) => {
            
        this.next(result);
        console.log(result);
        
        }, (err) => { 
            this.next(err);
        console.log(err);
        })
        
    }

    next(result: any):void{
        switch(result.status){
            case 200: {
                console.log(result+"resultado")
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
        }
    }

    goRegistro():void{
        /*
        var alert = this.alertCtrl.create({
            title: 'Lo Sentimos',
            subTitle: 'Presentamos un pequeño problema de ultima hora con esta parte',
            buttons: ['0k']
        });
        alert.present();
        return;
        */
        this.navCtrl.push(RegistroPage);
    }

    goMain():void{
        this.navCtrl.setRoot(HomePage);
    }

    goOlvideContrasena():void{
        this.navCtrl.setRoot(OlvidarContraseña2Page);
    }

    goChangePass():void{
        this.navCtrl.setRoot(CambiarContraseña2Page,{
            correo: this.log.correo,
            contrasena: this.log.contrasena,
        });
    }

    validate(data: any):boolean {
        var booleanValidte: boolean = true;
        if(data.correo==''){
          booleanValidte = false;
        }else if(data.tipo==''){
          booleanValidte = false;
        }else if (data.contrasena==''){
          booleanValidte = false;
        }
        return booleanValidte;
    }

}