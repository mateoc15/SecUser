import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
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

medicamentos: Object;
medicamentosCat: Object;
estado: Object;
@ViewChild('busquedaMedicamento', {read: ElementRef}) busquedaMedicamentoRef: ElementRef;
busquedaMedicamentoElement: HTMLInputElement=null;

  constructor(public navCtrl: NavController, public modalCtrl : ModalController, public navParams: NavParams, public userServiceProvider: UserServiceProvider ) {
  this.estado=this.navParams.get('param1');
  }

  ionViewDidLoad(){
    if(this.estado!="false"){
      this.userServiceProvider.getMedicamentos(this.navParams.get('param1'))
      .subscribe(
        (data) => { // Success
          this.medicamentos = data;
          this.medicamentosCat  = data;
        },
        (error) =>{
          console.error(error);
        }
      )
    }else{
      console.log(this.navParams.get('param2')+'dd');
      this.userServiceProvider.getMedicamentoNombre(this.navParams.get('param2'))
      .subscribe(
        (data) => { // Success
          console.log(data+'dd');
          this.medicamentos = data;
        },
        (error) =>{
          console.error(error);
        }
      )
      
    }
      
    }

    public showInfo(medicamentoId: string){

      var choice = medicamentoId;
      var modalPage = this.modalCtrl.create('ModalInfoMedicamentoPage', {choice}); modalPage.present();
    }

    public onInputt(text: any){
      this.busquedaMedicamentoElement =this.busquedaMedicamentoRef.nativeElement.querySelector('.searchbar-input');
      console.log(JSON.stringify(this.busquedaMedicamentoElement.value));
      if(this.busquedaMedicamentoElement.value != ""){
        this.userServiceProvider.getMedicamentoNombreCat(this.busquedaMedicamentoElement.value,this.navParams.get('param1'))
      .subscribe(
        (data) => { // Success
          this.medicamentos = data;
        },
        (error) =>{
          console.error(error);
        }
      )
      }else{
        
      }
    }

    public onCancelSearch(text: any){
      this.medicamentos = this.medicamentosCat;
      console.log('hol');
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
