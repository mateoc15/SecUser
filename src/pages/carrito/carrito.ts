import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompraPage } from '../compra/compra';
import { Observable } from 'rxjs/Observable';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { PagoPage } from '../pago/pago';

/**
 * Generated class for the CarritoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {
  //carrito: Observable<any[]>;
  carrito: any[] = [];
  totalCompra:number;
  solicitud = { id_cliente: '2', tipo_documento_cliente: 'cc', nomenclatura: 'cll', estado: 'pendiente'};

  constructor(public navCtrl: NavController, public navParams: NavParams, public userServiceProvider: UserServiceProvider) {
    this.carrito = JSON.parse(window.localStorage.getItem("carrito"));
    this.totalCompra = 0;
  }

  ionViewDidLoad() {
    if(this.carrito == undefined || this.carrito.length == 0) {
      alert("No tienes medicamentos en el carrito de compras");
      this.navCtrl.push(CompraPage);
    }else{
      for (let medicamento of this.carrito) {
        this.totalCompra+= medicamento.cantidad * medicamento.precio_unidad;
      }
    }
  }

  removeProduct(medicamento) {
    this.totalCompra-= medicamento.precio_unidad;
    medicamento.cantidad--;
    if (medicamento.cantidad == 0) {
      this.carrito = this.carrito.filter(obj => obj.id_codigo_inventario !== medicamento.id_codigo_inventario);
    }
    window.localStorage.setItem("carrito", JSON.stringify(this.carrito));
  }
  addProduct(medicamento) {
    this.totalCompra+= medicamento.precio_unidad;
    medicamento.cantidad++;
    window.localStorage.setItem("carrito", JSON.stringify(this.carrito));
  }

  removeAllProduct(medicamento) {
    this.totalCompra-= medicamento.cantidad * medicamento.precio_unidad;
    this.carrito = this.carrito.filter(obj => obj.id_codigo_inventario !== medicamento.id_codigo_inventario);
    console.log(JSON.stringify(this.carrito));
    window.localStorage.setItem("carrito", JSON.stringify(this.carrito));
  }

  finalizarCompra() {
    //Aqui se debe obtener el id del cliente, tipo de documento, la direccion y se le debe asignar el estado a la solicitud como pendiente
    this.userServiceProvider.solicitudDomicilio(this.solicitud).then((result) => {
          console.log(result);
        }, (err) => {
          console.log(err);
        });
        this.navCtrl.push(PagoPage);
  }

}
