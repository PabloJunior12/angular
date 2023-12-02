import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http:HttpClient) { }

  login(name:string,password:string){

    return this.http.post(`${environment.url}Area/login?nombre=${name}&password=${password}`, '')

  }

  getAreaservice(){

    return this.http.get<any[]>(`${environment.url}Area`)

  }

  getAreaId(id:number){

    return this.http.get<any>(`${environment.url}Area/${id}`)

  }



  getDni(dni:string){

    const headers = new HttpHeaders().set('Authorization', 'Bearer 1eicv2y8pdri5hEVRhMZbbGrkvA5GOzxyF97Y1aG' )

    return this.http.get(`https://apifoxperu.net/api/dni/${dni}`, { headers } )
  
  }
  
  getRuc(ruc:string){
    
    const headers = new HttpHeaders().set('Authorization', 'Bearer 1eicv2y8pdri5hEVRhMZbbGrkvA5GOzxyF97Y1aG' )

    return this.http.get(`https://apifoxperu.org/net/ruc/${ruc}`, { headers }  )
  
  }

}
