import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GetAllUsers, GetComm, GetPanels, GetSensors, SensorsByPanel,  } from 'src/app/interfaces/interfaces';
import { AuthService } from '../auth/auth.service';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class PanelsService {

  private url = environment.baseUrl;
  private token : string;
  private headers : HttpHeaders ;



  constructor(private _http : HttpClient, private authService : AuthService ) { 
    this.token = Cookie.get('token');
    this.headers  = new HttpHeaders({
      'Authorization' : this.token
    }) ;
    console.log("dentro del constructor ",this.token);
  }

  getAllUsers(){
    return this._http.get<GetAllUsers>(`${this.url}/api/users`);
  }  

  getPanels(){
    return this._http.get<GetPanels>(`${this.url}/api/panels?limite=20`, {headers:this.headers});
  }

  getSensors(){
    return this._http.get<GetSensors> (`${this.url}/api/sensors`, {headers:this.headers});
  }

  getSensorsByPanel(panelId : string){  
    console.log("panel que llega al servicio " + panelId);
    console.log("ruta " + `${this.url}/api/panels/${panelId}/sensors`);
    // return this._http.get< SensorsByPanel>(`${this.url}/api/panels/PNL000001/sensors`, {headers:this.headers});
    return this._http.get< SensorsByPanel>(`${this.url}/api/panels/${panelId}/sensors`, {headers:this.headers});


  }

  getComm(sensorId : string){

    return this._http.get<GetComm>(`${this.url}/api/commutations?sensorId=${sensorId}`, {headers:this.headers})

  }

}



