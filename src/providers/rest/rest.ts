import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  apiUrl = 'http://api-rest-sec.herokuapp.com';

  //------Usuarios
  apiUrlLogin = 'http://api-rest-sec.herokuapp.com/u/login';
  apiUrlChangePass= 'http://api-rest-sec.herokuapp.com/u/put/login';
  apiUrlRegistrar = 'http://api-rest-sec.herokuapp.com/u/signup';

  //------Medicamentos
  apiUrlGetMedicamentos = 'http://api-rest-sec.herokuapp.com/m/medicamentos';
  apiUrlGetMedicamentoCategoria = 'http://api-rest-sec.herokuapp.com/m/medicamentos/:categoria';
  apiUrlPostMedicamento= 'http://api-rest-sec.herokuapp.com/m/medicamentos';
  apiUrlModificarMedicamento = 'http://api-rest-sec.herokuapp.com/m/put/medicamentos/:id';
  apiUrlEliminarMedicamento = 'http://api-rest-sec.herokuapp.com/m/del/medicamentos/:id';


  addMedicamento(data){
    //console.log(data);
    

    console.log(JSON.stringify(data));
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(data);

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlPostMedicamento,data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  login(data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlLogin, data)
        .subscribe(res => {
          console.log(data);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  changePass(data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlChangePass, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  register(data){
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrlRegistrar, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }




}
