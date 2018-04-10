import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddInventarioPage } from './add-inventario';

@NgModule({
  declarations: [
    AddInventarioPage,
  ],
  imports: [
    IonicPageModule.forChild(AddInventarioPage),
  ],
})
export class AddInventarioPageModule {}
