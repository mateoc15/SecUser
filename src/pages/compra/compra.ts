import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ListaMedicamentosPage } from '../lista-medicamentos/lista-medicamentos';


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
  categorias: Observable <any>;
  posts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {

    this.categorias = this.httpClient.get('https://swapi.co/api/people');
    this.categorias
    .subscribe(data => {
      console.log('my data: ', data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompraPage');
  }

  listarMedicamentosCategoria(categoria: string) {
  this.navCtrl.push(ListaMedicamentosPage, categoria);
}

}
