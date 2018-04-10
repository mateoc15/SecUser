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

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  getMedicamentos(categoria: string) {
    return this.http.get('http://api-rest-sec.herokuapp.com/m/medicamentos/'+categoria);
  }

  getMedicamento(id: string) {
    return this.http.get('http://api-rest-sec.herokuapp.com/m/medicamentos/id/'+id);
  }


  solicitudDomicilio(data) {
    
  return new Promise((resolve, reject) => {
    this.http.post('http://api-rest-sec.herokuapp.com/s/solicituddomicilio', data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

}
