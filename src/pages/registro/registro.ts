import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  private cliente = {
    id_cliente: '',
    id_tipo_documento: '',
    correo: '',
    nombre: '',
    fecha_de_nacimiento: '',
    genero: ''
  }

constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public restProvider: RestProvider,
    public alertCtrl: AlertController
  ) {}

ionViewDidLoad() {
console.log('ionViewDidLoad RegistroPage');
}


register(){

    this.cliente = this.completeDefault();
    if(!this.validateComplete(this.cliente)){
      var alert = this.alertCtrl.create({
        title: 'Campos Vacios',
        subTitle: 'Por Favor LLenar Los Campos Faltantes',
        buttons: ['0k']
      });
      alert.present();
      return;
    }
    this.restProvider.register(this.cliente).then((result) => {
        
      this.todoOk();
      console.log(result);
    }, (err) => { 
      this.next(err);
      //this.todoNoOk(err);
      console.log(err);
      
    })
  }


  completeDefault(): any{
    var repartidorSend = this.cliente;
    if(this.cliente.fecha_de_nacimiento==''){
      repartidorSend.fecha_de_nacimiento='0001-01-01';
    }
    if(this.cliente.nombre==''){
      repartidorSend.nombre='Default';
    }
    if(this.cliente.genero==''){
      repartidorSend.genero='Default';
    }
    return repartidorSend;
  }
  
  validateComplete(object: any):boolean{
    var validate:boolean = true;
    if((object.correo=='') || (object.id_repartidor=='' )|| (object.tipo_documento=='')){
      
      validate = false;
    }
    return validate;
  }

  next(result: any):void{
    switch(result.status){
        case 200: {
            this.todoOk();
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

todoOk(){
    this.cliente = {
      id_cliente: '',
      id_tipo_documento: '',
      correo: '',
      nombre: '',
      fecha_de_nacimiento: '',
      genero: ''
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

}
