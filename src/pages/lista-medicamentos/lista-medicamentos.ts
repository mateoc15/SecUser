import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ModalController } from 'ionic-angular';
import { ModalInfoMedicamentoPage } from '../modal-info-medicamento/modal-info-medicamento';
import { CarritoPage } from '../carrito/carrito';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ListaMedicamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-medicamentos',
  templateUrl: 'lista-medicamentos.html',
})
export class ListaMedicamentosPage {
  medicamentos: Observable<any[]>;
  //medicamentos: any[] = [];
  constructor(public navCtrl: NavController, public modalCtrl : ModalController, public navParams: NavParams, public userServiceProvider: UserServiceProvider ) {
  }

  ionViewDidLoad(){
      this.userServiceProvider.getMedicamentos(this.navParams.data)
      .subscribe(
        (data) => { // Success
          this.medicamentos = data;
        },
        (error) =>{
          console.error(error);
        }
      )
    }

    public showInfo(medicamentoId: string){

      var choice = medicamentoId;
      var modalPage = this.modalCtrl.create('ModalInfoMedicamentoPage', {choice}); modalPage.present();
    }

    removeProduct(medicamento) {
      medicamento.cantidad--;
    }
    addProduct(medicamento) {
        if (medicamento.cantidad == undefined) {
          medicamento.cantidad = 1;
        }else {
          medicamento.cantidad++;
        }
    }
    addToCart(medicamento) {
      if (medicamento.added) {
        alert ("Este medicamento ya a sido añadido a tu carrito");
      }else {
        medicamento.added = true;
        var carrito:any = window.localStorage.getItem("carrito");
        if(carrito == null) {
          carrito = new Array();
        }else{
          carrito = JSON.parse(carrito);
        }
        carrito.push(medicamento);
        window.localStorage.setItem("carrito", JSON.stringify(carrito));
        alert("Medicamento añadido correctamente");
      }
    }
    verCarrito(){
      this.navCtrl.push(CarritoPage);
    }

}
