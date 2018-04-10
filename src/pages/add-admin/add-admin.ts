import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the AddAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-admin',
  templateUrl: 'add-admin.html',
})
export class AddAdminPage {

  private admin = {
    id_administrador: '',
    tipo_documento: '',
    correo: '',
    nombre: '',
    fecha_de_nacimiento: ''
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public restProvider: RestProvider,
              public alertCtrl: AlertController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAdminPage');
  }

  addAdmin(){
    this.admin = this.completeDefault();
    if(!this.validateComplete(this.admin)){
      var alert = this.alertCtrl.create({
        title: 'Campos Vacios',
        subTitle: 'Por Favor LLenar Los Campos Faltantes',
        buttons: ['0k']
      });
      alert.present();
      return;
    }
    
    this.restProvider.addAdmin(this.admin).then((result) => {
      //this.next(result);
      this.todoOk();
      console.log(this.admin);
      console.log(result);
    }, (err) => { 
      this.next(err);
      console.log(err);
    })
  }


  todoOk(){
    this.admin = {
      id_administrador: '',
      tipo_documento: '',
      correo: '',
      nombre: '',
      fecha_de_nacimiento: ''
    }
    var alert = this.alertCtrl.create({
      title: 'Todo OK',
      subTitle: 'Se Ha Registrado El Empleado Correctamente',
      buttons: ['0k']
    });
    alert.present();
  }

  todoNoOk(result){
    var alert = this.alertCtrl.create({
      title: 'Error: '+ result.status,
      subTitle: 'Se Ha Producido Un Error\n Por favor Intentelo De Nuevo',
      buttons: ['0k']
    });
    alert.present();
  }

  next(result: any):void{
    switch(result.status){
        case 300: {
          var alert = this.alertCtrl.create({
              title: 'Error: ' + result.status,
              subTitle: 'Falta Información',
              buttons: ['0k']
          });
          alert.present();
          break;
        }
        default:{
          this.todoNoOk(result);
          break;
        }
    }
  }

  completeDefault(): any{
    var adminSend = this.admin;
    if(this.admin.fecha_de_nacimiento==''){
      adminSend.fecha_de_nacimiento='0001-01-01';
    }
    if(this.admin.nombre==''){
      adminSend.nombre='Default';
    }
    return adminSend;
  }

  validateComplete(object: any):boolean{
    var validate:boolean = true;
    if((object.correo=='') || (object.id_administrador=='' )|| (object.tipo_documento=='')){
      validate = false;
    }
    return validate;
  }

}
