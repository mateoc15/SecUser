import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaMedicamentosPage } from './lista-medicamentos';

@NgModule({
  declarations: [
    ListaMedicamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaMedicamentosPage),
  ],
})
export class ListaMedicamentosPageModule {}
