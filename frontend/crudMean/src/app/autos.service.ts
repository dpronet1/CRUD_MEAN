import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class AutosService {

  constructor ( private http: HttpClient ) { }
  private urlGeneral = 'http://localhost:3000/api/auto/';

  // crearAuto(auto:object){
  crearAuto(auto:any){  //auto:object
    return this.http.post<any>(this.urlGeneral, auto);
  }

  editarAuto(auto:any){  //auto:object
    return this.http.put<any>(this.urlGeneral, auto);
  }

  listarAutos(){ 
    return this.http.get<any>(this.urlGeneral+"/listaAutos/");
    // return this.http.put<any>(this.urlGeneral+"/listaAutos/");
  }

  eliminarAuto(auto:any){
    // console.log(auto_id);
    // const url = `${this.urlGeneral}${_id}`
    // return this.http.delete<any>(url);
    // console.log(this.urlGeneral+auto_id);
    // const _id = auto._id
    return this.http.delete<any>(this.urlGeneral+auto._id);
  }

}
