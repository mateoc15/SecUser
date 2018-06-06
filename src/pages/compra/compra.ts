import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ListaMedicamentosPage } from '../lista-medicamentos/lista-medicamentos';
import { UserServiceProvider } from '../../providers/user-service/user-service';


/**
 * Generated class for the CompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compra',
  templateUrl: 'compra.html',
})
export class CompraPage {
  medicamentos: Object;
  medicamentosCat: Object;
  @ViewChild('busquedaMedicamentoNom', {read: ElementRef}) busquedaMedicamentoRef: ElementRef;
  busquedaMedicamentoElement: HTMLInputElement=null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public userServiceProvider: UserServiceProvider ) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompraPage');
  }

  listarMedicamentosCategoria(categoria: string) {
  this.navCtrl.push(ListaMedicamentosPage, {
    param1: categoria, param2: 'false'
  });
}

public buscaMedicamento(text: any){
  this.busquedaMedicamentoElement =this.busquedaMedicamentoRef.nativeElement.querySelector('.searchbar-input');
  console.log(JSON.stringify(this.busquedaMedicamentoElement.value));
  if(this.busquedaMedicamentoElement.value != ""){
    this.navCtrl.push(ListaMedicamentosPage,{
      param1: 'false', param2: this.busquedaMedicamentoElement.value
    });
  }else{
    
  }
}

}
