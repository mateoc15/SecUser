import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'

/**
 * Generated class for the AddInventarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-inventario',
  templateUrl: 'add-inventario.html',
})
export class AddInventarioPage {

  private medicamento = {
    id_codigo_inventario: '',
    nombre: '',
    unidades_disponibles: '',
    fecha_de_vencimiento: '',
    laboratorio: '',
    precio_unidad: '',
    categoria: ''

  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public restProvider: RestProvider,
              public alertCtrl: AlertController
            ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddInventarioPage');
  }
  
  addMedicamento(){
    this.restProvider.addMedicamento(this.medicamento).then((result) => {
      
      //this.next(result);
      console.log(result);
      this.todoOk2();
    }, (err) => { 
      this.todoNoOk(err);
      //this.next(err);
      console.log(err);
    })
  }

  todoOk2(){
    this.medicamento = {
      id_codigo_inventario: '',
      nombre: '',
      unidades_disponibles: '',
      fecha_de_vencimiento: '',
      laboratorio: '',
      precio_unidad: '',
      categoria: ''
  
    }
    var alert = this.alertCtrl.create({
      title: 'Todo OK',
      subTitle: 'Se Ha Registrado El Producto',
      buttons: ['0k']
    });
    alert.present();
  }

  todoNoOk(result){
    if(result.status = '200'){
      return;
    }
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
            this.todoOk2;
            break;
        }
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

}
