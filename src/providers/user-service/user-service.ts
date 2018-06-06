import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  data: any;
  url = 'http://api-rest-sec.herokuapp.com/';
  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  getMedicamentos(categoria: string) {
    return this.http.get(this.url+'m/medicamentos/'+categoria);
  }

  getMedicamento(id: string) {
    return this.http.get(this.url+'m/medicamentos/id/'+id);
  }

  getMedicamentoNombreCat(nombre: string, categoria: string){
    return this.http.get(this.url+'m/medicamentos/nombrecat/'+nombre+'/'+categoria);
  }

  getMedicamentoNombre(nombre: string){
    return this.http.get(this.url+'m/medicamentos/nombre/'+nombre);
  }

  solicitudDomicilio(data) {
    
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'s/solicituddomicilio', data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

botonpayu(data){
return new Promise((resolve, reject) => {
this.http.post(' https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi', data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

}
