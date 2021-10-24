import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.baseUrl;
  user='';

  headers = new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + this._auth.getToken()
  })

  constructor(private _http: HttpClient, private  _auth: AuthService) { }

  reloadHeaders(){
    this.headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + this._auth.getToken()
    })
  }

  setActiveUser(user){
    this.user = user;
  }

  getRestaurantsByUser(){
    return this._http.get<any>(this.url+'/user/' + this.user + '/restaurant', {headers: this.headers});
  }

}
