import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalInfoMedicamentoPage } from './modal-info-medicamento';

@NgModule({
  declarations: [
    ModalInfoMedicamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalInfoMedicamentoPage),
  ],
})
export class ModalInfoMedicamentoPageModule {}
