import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the ModalInfoMedicamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-info-medicamento',
  templateUrl: 'modal-info-medicamento.html',
})
export class ModalInfoMedicamentoPage {
  public medicamentoModal: Observable<any[]>;
    //public medicamentoModal: any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,  public userServiceProvider: UserServiceProvider) {

  }

  ionViewDidLoad() {
    this.userServiceProvider.getMedicamento(this.navParams.get('choice'))
    .subscribe(
      (data) => { // Success
        this.medicamentoModal = data;
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  closeModal() {
        this.navCtrl.pop();
    }

}
