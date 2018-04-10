import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the AddRepartidorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-repartidor',
  templateUrl: 'add-repartidor.html',
})
export class AddRepartidorPage {

  private repartidor = {
    id_repartidor: '',
    tipo_documento: '',
    correo: '',
    nombre: '',
    fecha_de_nacimiento: '',
    horarios: ''
  }


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public restProvider: RestProvider,
              public alertCtrl: AlertController
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRepartidorPage');
  }

  addRepartidor(){
    this.restProvider.addRepartidor(this.repartidor).then((result) => {
      this.next(result);
      //this.todoOk();
      console.log(result);
    }, (err) => { 
      this.next(err);
      //this.todoNoOk(err);
      console.log(err);
      
    })
  }

  todoOk(){
    this.repartidor = {
      id_repartidor: '',
      tipo_documento: '',
      correo: '',
      nombre: '',
      fecha_de_nacimiento: '',
      horarios: ''
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
        case 200: {
            this.todoOk;
        }
        case 300: {
          var alert = this.alertCtrl.create({
              title: 'Error: ' + result.status,
              subTitle: 'Falta Información',
              buttons: ['0k']
          });
          alert.present();
          return;
        }
        default:{
          this.todoNoOk(result);
          break;
        }
    }
}

}
