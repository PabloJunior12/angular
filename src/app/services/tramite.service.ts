import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TramiteService {

  constructor(private http:HttpClient) { }

  newTramiteService(data:any){

    return this.http.post(`${environment.url}Tramite`, data )

  }

  getTramiteService(){

    let id = localStorage.getItem('area')

    return this.http.get(`${environment.url}Tramite/origen/${id}` )

  }

}
